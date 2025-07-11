# `extendedCustomLocation` Submodule <a name="`extendedCustomLocation` Submodule" id="@cdktf/provider-azurerm.extendedCustomLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtendedCustomLocation <a name="ExtendedCustomLocation" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location azurerm_extended_custom_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocation(
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
  authentication: ExtendedCustomLocationAuthentication = None,
  display_name: str = None,
  host_type: str = None,
  id: str = None,
  timeouts: ExtendedCustomLocationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.clusterExtensionIds">cluster_extension_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#cluster_extension_ids ExtendedCustomLocation#cluster_extension_ids}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.hostResourceId">host_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_resource_id ExtendedCustomLocation#host_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#location ExtendedCustomLocation#location}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#name ExtendedCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#namespace ExtendedCustomLocation#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#resource_group_name ExtendedCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#display_name ExtendedCustomLocation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.hostType">host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_type ExtendedCustomLocation#host_type}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#id ExtendedCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_extension_ids`<sup>Required</sup> <a name="cluster_extension_ids" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.clusterExtensionIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#cluster_extension_ids ExtendedCustomLocation#cluster_extension_ids}.

---

##### `host_resource_id`<sup>Required</sup> <a name="host_resource_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.hostResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_resource_id ExtendedCustomLocation#host_resource_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#location ExtendedCustomLocation#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#name ExtendedCustomLocation#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#namespace ExtendedCustomLocation#namespace}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#resource_group_name ExtendedCustomLocation#resource_group_name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#authentication ExtendedCustomLocation#authentication}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#display_name ExtendedCustomLocation#display_name}.

---

##### `host_type`<sup>Optional</sup> <a name="host_type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.hostType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_type ExtendedCustomLocation#host_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#id ExtendedCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#timeouts ExtendedCustomLocation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetHostType">reset_host_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putAuthentication"></a>

```python
def put_authentication(
  value: str,
  type: str = None
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putAuthentication.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#value ExtendedCustomLocation#value}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putAuthentication.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#type ExtendedCustomLocation#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#create ExtendedCustomLocation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#delete ExtendedCustomLocation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#read ExtendedCustomLocation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#update ExtendedCustomLocation#update}.

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_host_type` <a name="reset_host_type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetHostType"></a>

```python
def reset_host_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExtendedCustomLocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExtendedCustomLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExtendedCustomLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExtendedCustomLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExtendedCustomLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference">ExtendedCustomLocationAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference">ExtendedCustomLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.clusterExtensionIdsInput">cluster_extension_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostResourceIdInput">host_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostTypeInput">host_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.clusterExtensionIds">cluster_extension_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostResourceId">host_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.authentication"></a>

```python
authentication: ExtendedCustomLocationAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference">ExtendedCustomLocationAuthenticationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.timeouts"></a>

```python
timeouts: ExtendedCustomLocationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference">ExtendedCustomLocationTimeoutsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.authenticationInput"></a>

```python
authentication_input: ExtendedCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a>

---

##### `cluster_extension_ids_input`<sup>Optional</sup> <a name="cluster_extension_ids_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.clusterExtensionIdsInput"></a>

```python
cluster_extension_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `host_resource_id_input`<sup>Optional</sup> <a name="host_resource_id_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostResourceIdInput"></a>

```python
host_resource_id_input: str
```

- *Type:* str

---

##### `host_type_input`<sup>Optional</sup> <a name="host_type_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostTypeInput"></a>

```python
host_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExtendedCustomLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a>]

---

##### `cluster_extension_ids`<sup>Required</sup> <a name="cluster_extension_ids" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.clusterExtensionIds"></a>

```python
cluster_extension_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_resource_id`<sup>Required</sup> <a name="host_resource_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostResourceId"></a>

```python
host_resource_id: str
```

- *Type:* str

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExtendedCustomLocationAuthentication <a name="ExtendedCustomLocationAuthentication" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocationAuthentication(
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#value ExtendedCustomLocation#value}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#type ExtendedCustomLocation#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#value ExtendedCustomLocation#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#type ExtendedCustomLocation#type}.

---

### ExtendedCustomLocationConfig <a name="ExtendedCustomLocationConfig" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocationConfig(
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
  authentication: ExtendedCustomLocationAuthentication = None,
  display_name: str = None,
  host_type: str = None,
  id: str = None,
  timeouts: ExtendedCustomLocationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.clusterExtensionIds">cluster_extension_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#cluster_extension_ids ExtendedCustomLocation#cluster_extension_ids}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.hostResourceId">host_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_resource_id ExtendedCustomLocation#host_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#location ExtendedCustomLocation#location}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#name ExtendedCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#namespace ExtendedCustomLocation#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#resource_group_name ExtendedCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#display_name ExtendedCustomLocation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.hostType">host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_type ExtendedCustomLocation#host_type}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#id ExtendedCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_extension_ids`<sup>Required</sup> <a name="cluster_extension_ids" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.clusterExtensionIds"></a>

```python
cluster_extension_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#cluster_extension_ids ExtendedCustomLocation#cluster_extension_ids}.

---

##### `host_resource_id`<sup>Required</sup> <a name="host_resource_id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.hostResourceId"></a>

```python
host_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_resource_id ExtendedCustomLocation#host_resource_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#location ExtendedCustomLocation#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#name ExtendedCustomLocation#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#namespace ExtendedCustomLocation#namespace}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#resource_group_name ExtendedCustomLocation#resource_group_name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.authentication"></a>

```python
authentication: ExtendedCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#authentication ExtendedCustomLocation#authentication}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#display_name ExtendedCustomLocation#display_name}.

---

##### `host_type`<sup>Optional</sup> <a name="host_type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#host_type ExtendedCustomLocation#host_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#id ExtendedCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationConfig.property.timeouts"></a>

```python
timeouts: ExtendedCustomLocationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#timeouts ExtendedCustomLocation#timeouts}

---

### ExtendedCustomLocationTimeouts <a name="ExtendedCustomLocationTimeouts" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#create ExtendedCustomLocation#create}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#delete ExtendedCustomLocation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#read ExtendedCustomLocation#read}. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#update ExtendedCustomLocation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#create ExtendedCustomLocation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#delete ExtendedCustomLocation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#read ExtendedCustomLocation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/extended_custom_location#update ExtendedCustomLocation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExtendedCustomLocationAuthenticationOutputReference <a name="ExtendedCustomLocationAuthenticationOutputReference" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: ExtendedCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationAuthentication">ExtendedCustomLocationAuthentication</a>

---


### ExtendedCustomLocationTimeoutsOutputReference <a name="ExtendedCustomLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import extended_custom_location

extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExtendedCustomLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.extendedCustomLocation.ExtendedCustomLocationTimeouts">ExtendedCustomLocationTimeouts</a>]

---



