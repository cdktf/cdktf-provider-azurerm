# `extendedLocationCustomLocation` Submodule <a name="`extendedLocationCustomLocation` Submodule" id="@cdktf/provider-azurerm.extendedLocationCustomLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtendedLocationCustomLocation <a name="ExtendedLocationCustomLocation" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location azurerm_extended_location_custom_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_extension_ids: typing.List[str],
  host_resource_id: str,
  location: str,
  name: str,
  namespace: str,
  resource_group_name: str,
  authentication: ExtendedLocationCustomLocationAuthentication = None,
  display_name: str = None,
  host_type: str = None,
  id: str = None,
  timeouts: ExtendedLocationCustomLocationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.clusterExtensionIds">cluster_extension_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.hostResourceId">host_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.hostType">host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_extension_ids`<sup>Required</sup> <a name="cluster_extension_ids" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.clusterExtensionIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}.

---

##### `host_resource_id`<sup>Required</sup> <a name="host_resource_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.hostResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#authentication ExtendedLocationCustomLocation#authentication}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}.

---

##### `host_type`<sup>Optional</sup> <a name="host_type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.hostType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#timeouts ExtendedLocationCustomLocation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType">reset_host_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication"></a>

```python
def put_authentication(
  value: str,
  type: str = None
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}.

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_host_type` <a name="reset_host_type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType"></a>

```python
def reset_host_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExtendedLocationCustomLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExtendedLocationCustomLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExtendedLocationCustomLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput">cluster_extension_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput">host_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput">host_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds">cluster_extension_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId">host_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication"></a>

```python
authentication: ExtendedLocationCustomLocationAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts"></a>

```python
timeouts: ExtendedLocationCustomLocationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput"></a>

```python
authentication_input: ExtendedLocationCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---

##### `cluster_extension_ids_input`<sup>Optional</sup> <a name="cluster_extension_ids_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput"></a>

```python
cluster_extension_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `host_resource_id_input`<sup>Optional</sup> <a name="host_resource_id_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput"></a>

```python
host_resource_id_input: str
```

- *Type:* str

---

##### `host_type_input`<sup>Optional</sup> <a name="host_type_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput"></a>

```python
host_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExtendedLocationCustomLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>]

---

##### `cluster_extension_ids`<sup>Required</sup> <a name="cluster_extension_ids" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds"></a>

```python
cluster_extension_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_resource_id`<sup>Required</sup> <a name="host_resource_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId"></a>

```python
host_resource_id: str
```

- *Type:* str

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExtendedLocationCustomLocationAuthentication <a name="ExtendedLocationCustomLocationAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication(
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}.

---

### ExtendedLocationCustomLocationConfig <a name="ExtendedLocationCustomLocationConfig" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_extension_ids: typing.List[str],
  host_resource_id: str,
  location: str,
  name: str,
  namespace: str,
  resource_group_name: str,
  authentication: ExtendedLocationCustomLocationAuthentication = None,
  display_name: str = None,
  host_type: str = None,
  id: str = None,
  timeouts: ExtendedLocationCustomLocationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds">cluster_extension_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId">host_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType">host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_extension_ids`<sup>Required</sup> <a name="cluster_extension_ids" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds"></a>

```python
cluster_extension_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}.

---

##### `host_resource_id`<sup>Required</sup> <a name="host_resource_id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId"></a>

```python
host_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication"></a>

```python
authentication: ExtendedLocationCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#authentication ExtendedLocationCustomLocation#authentication}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}.

---

##### `host_type`<sup>Optional</sup> <a name="host_type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts"></a>

```python
timeouts: ExtendedLocationCustomLocationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#timeouts ExtendedLocationCustomLocation#timeouts}

---

### ExtendedLocationCustomLocationTimeouts <a name="ExtendedLocationCustomLocationTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExtendedLocationCustomLocationAuthenticationOutputReference <a name="ExtendedLocationCustomLocationAuthenticationOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: ExtendedLocationCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---


### ExtendedLocationCustomLocationTimeoutsOutputReference <a name="ExtendedLocationCustomLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_location_custom_location

extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExtendedLocationCustomLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>]

---



