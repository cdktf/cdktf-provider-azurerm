# `managedApplicationDefinition` Submodule <a name="`managedApplicationDefinition` Submodule" id="@cdktf/provider-azurerm.managedApplicationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedApplicationDefinition <a name="ManagedApplicationDefinition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition azurerm_managed_application_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  lock_level: str,
  name: str,
  resource_group_name: str,
  authorization: typing.Union[IResolvable, typing.List[ManagedApplicationDefinitionAuthorization]] = None,
  create_ui_definition: str = None,
  description: str = None,
  id: str = None,
  main_template: str = None,
  package_enabled: typing.Union[bool, IResolvable] = None,
  package_file_uri: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ManagedApplicationDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.lockLevel">lock_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.authorization">authorization</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]</code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.createUiDefinition">create_ui_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.mainTemplate">main_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.packageEnabled">package_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.packageFileUri">package_file_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}.

---

##### `lock_level`<sup>Required</sup> <a name="lock_level" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.lockLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.authorization"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#authorization ManagedApplicationDefinition#authorization}

---

##### `create_ui_definition`<sup>Optional</sup> <a name="create_ui_definition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.createUiDefinition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `main_template`<sup>Optional</sup> <a name="main_template" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.mainTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}.

---

##### `package_enabled`<sup>Optional</sup> <a name="package_enabled" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.packageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}.

---

##### `package_file_uri`<sup>Optional</sup> <a name="package_file_uri" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.packageFileUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#timeouts ManagedApplicationDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetCreateUiDefinition">reset_create_ui_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetMainTemplate">reset_main_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageEnabled">reset_package_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageFileUri">reset_package_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization"></a>

```python
def put_authorization(
  value: typing.Union[IResolvable, typing.List[ManagedApplicationDefinitionAuthorization]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#create ManagedApplicationDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#delete ManagedApplicationDefinition#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#read ManagedApplicationDefinition#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#update ManagedApplicationDefinition#update}.

---

##### `reset_authorization` <a name="reset_authorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_create_ui_definition` <a name="reset_create_ui_definition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetCreateUiDefinition"></a>

```python
def reset_create_ui_definition() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_main_template` <a name="reset_main_template" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetMainTemplate"></a>

```python
def reset_main_template() -> None
```

##### `reset_package_enabled` <a name="reset_package_enabled" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageEnabled"></a>

```python
def reset_package_enabled() -> None
```

##### `reset_package_file_uri` <a name="reset_package_file_uri" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageFileUri"></a>

```python
def reset_package_file_uri() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedApplicationDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedApplicationDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedApplicationDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedApplicationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedApplicationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList">ManagedApplicationDefinitionAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference">ManagedApplicationDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorizationInput">authorization_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinitionInput">create_ui_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevelInput">lock_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplateInput">main_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabledInput">package_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUriInput">package_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinition">create_ui_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevel">lock_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplate">main_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabled">package_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUri">package_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorization"></a>

```python
authorization: ManagedApplicationDefinitionAuthorizationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList">ManagedApplicationDefinitionAuthorizationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeouts"></a>

```python
timeouts: ManagedApplicationDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference">ManagedApplicationDefinitionTimeoutsOutputReference</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorizationInput"></a>

```python
authorization_input: typing.Union[IResolvable, typing.List[ManagedApplicationDefinitionAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]

---

##### `create_ui_definition_input`<sup>Optional</sup> <a name="create_ui_definition_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinitionInput"></a>

```python
create_ui_definition_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `lock_level_input`<sup>Optional</sup> <a name="lock_level_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevelInput"></a>

```python
lock_level_input: str
```

- *Type:* str

---

##### `main_template_input`<sup>Optional</sup> <a name="main_template_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplateInput"></a>

```python
main_template_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `package_enabled_input`<sup>Optional</sup> <a name="package_enabled_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabledInput"></a>

```python
package_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `package_file_uri_input`<sup>Optional</sup> <a name="package_file_uri_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUriInput"></a>

```python
package_file_uri_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ManagedApplicationDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>]

---

##### `create_ui_definition`<sup>Required</sup> <a name="create_ui_definition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinition"></a>

```python
create_ui_definition: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `lock_level`<sup>Required</sup> <a name="lock_level" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevel"></a>

```python
lock_level: str
```

- *Type:* str

---

##### `main_template`<sup>Required</sup> <a name="main_template" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplate"></a>

```python
main_template: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_enabled`<sup>Required</sup> <a name="package_enabled" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabled"></a>

```python
package_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `package_file_uri`<sup>Required</sup> <a name="package_file_uri" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUri"></a>

```python
package_file_uri: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedApplicationDefinitionAuthorization <a name="ManagedApplicationDefinitionAuthorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinitionAuthorization(
  role_definition_id: str,
  service_principal_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#role_definition_id ManagedApplicationDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#service_principal_id ManagedApplicationDefinition#service_principal_id}. |

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#role_definition_id ManagedApplicationDefinition#role_definition_id}.

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#service_principal_id ManagedApplicationDefinition#service_principal_id}.

---

### ManagedApplicationDefinitionConfig <a name="ManagedApplicationDefinitionConfig" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  lock_level: str,
  name: str,
  resource_group_name: str,
  authorization: typing.Union[IResolvable, typing.List[ManagedApplicationDefinitionAuthorization]] = None,
  create_ui_definition: str = None,
  description: str = None,
  id: str = None,
  main_template: str = None,
  package_enabled: typing.Union[bool, IResolvable] = None,
  package_file_uri: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ManagedApplicationDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lockLevel">lock_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.authorization">authorization</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]</code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.createUiDefinition">create_ui_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.mainTemplate">main_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageEnabled">package_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageFileUri">package_file_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}.

---

##### `lock_level`<sup>Required</sup> <a name="lock_level" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lockLevel"></a>

```python
lock_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.authorization"></a>

```python
authorization: typing.Union[IResolvable, typing.List[ManagedApplicationDefinitionAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#authorization ManagedApplicationDefinition#authorization}

---

##### `create_ui_definition`<sup>Optional</sup> <a name="create_ui_definition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.createUiDefinition"></a>

```python
create_ui_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `main_template`<sup>Optional</sup> <a name="main_template" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.mainTemplate"></a>

```python
main_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}.

---

##### `package_enabled`<sup>Optional</sup> <a name="package_enabled" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageEnabled"></a>

```python
package_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}.

---

##### `package_file_uri`<sup>Optional</sup> <a name="package_file_uri" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageFileUri"></a>

```python
package_file_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.timeouts"></a>

```python
timeouts: ManagedApplicationDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#timeouts ManagedApplicationDefinition#timeouts}

---

### ManagedApplicationDefinitionTimeouts <a name="ManagedApplicationDefinitionTimeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#create ManagedApplicationDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#delete ManagedApplicationDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#read ManagedApplicationDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#update ManagedApplicationDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#create ManagedApplicationDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#delete ManagedApplicationDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#read ManagedApplicationDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_application_definition#update ManagedApplicationDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedApplicationDefinitionAuthorizationList <a name="ManagedApplicationDefinitionAuthorizationList" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedApplicationDefinitionAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagedApplicationDefinitionAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]]

---


### ManagedApplicationDefinitionAuthorizationOutputReference <a name="ManagedApplicationDefinitionAuthorizationOutputReference" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedApplicationDefinitionAuthorization]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>]

---


### ManagedApplicationDefinitionTimeoutsOutputReference <a name="ManagedApplicationDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_application_definition

managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedApplicationDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>]

---



