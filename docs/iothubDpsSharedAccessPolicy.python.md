# `iothubDpsSharedAccessPolicy` Submodule <a name="`iothubDpsSharedAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubDpsSharedAccessPolicy <a name="IothubDpsSharedAccessPolicy" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy azurerm_iothub_dps_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iothub_dps_name: str,
  name: str,
  resource_group_name: str,
  enrollment_read: typing.Union[bool, IResolvable] = None,
  enrollment_write: typing.Union[bool, IResolvable] = None,
  id: str = None,
  registration_read: typing.Union[bool, IResolvable] = None,
  registration_write: typing.Union[bool, IResolvable] = None,
  service_config: typing.Union[bool, IResolvable] = None,
  timeouts: IothubDpsSharedAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.iothubDpsName">iothub_dps_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#iothub_dps_name IothubDpsSharedAccessPolicy#iothub_dps_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#name IothubDpsSharedAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#resource_group_name IothubDpsSharedAccessPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.enrollmentRead">enrollment_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_read IothubDpsSharedAccessPolicy#enrollment_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.enrollmentWrite">enrollment_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_write IothubDpsSharedAccessPolicy#enrollment_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#id IothubDpsSharedAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.registrationRead">registration_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_read IothubDpsSharedAccessPolicy#registration_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.registrationWrite">registration_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_write IothubDpsSharedAccessPolicy#registration_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.serviceConfig">service_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#service_config IothubDpsSharedAccessPolicy#service_config}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iothub_dps_name`<sup>Required</sup> <a name="iothub_dps_name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.iothubDpsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#iothub_dps_name IothubDpsSharedAccessPolicy#iothub_dps_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#name IothubDpsSharedAccessPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#resource_group_name IothubDpsSharedAccessPolicy#resource_group_name}.

---

##### `enrollment_read`<sup>Optional</sup> <a name="enrollment_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.enrollmentRead"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_read IothubDpsSharedAccessPolicy#enrollment_read}.

---

##### `enrollment_write`<sup>Optional</sup> <a name="enrollment_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.enrollmentWrite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_write IothubDpsSharedAccessPolicy#enrollment_write}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#id IothubDpsSharedAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registration_read`<sup>Optional</sup> <a name="registration_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.registrationRead"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_read IothubDpsSharedAccessPolicy#registration_read}.

---

##### `registration_write`<sup>Optional</sup> <a name="registration_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.registrationWrite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_write IothubDpsSharedAccessPolicy#registration_write}.

---

##### `service_config`<sup>Optional</sup> <a name="service_config" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.serviceConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#service_config IothubDpsSharedAccessPolicy#service_config}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#timeouts IothubDpsSharedAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentRead">reset_enrollment_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentWrite">reset_enrollment_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationRead">reset_registration_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationWrite">reset_registration_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetServiceConfig">reset_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#create IothubDpsSharedAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#delete IothubDpsSharedAccessPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#read IothubDpsSharedAccessPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#update IothubDpsSharedAccessPolicy#update}.

---

##### `reset_enrollment_read` <a name="reset_enrollment_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentRead"></a>

```python
def reset_enrollment_read() -> None
```

##### `reset_enrollment_write` <a name="reset_enrollment_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentWrite"></a>

```python
def reset_enrollment_write() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_registration_read` <a name="reset_registration_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationRead"></a>

```python
def reset_registration_read() -> None
```

##### `reset_registration_write` <a name="reset_registration_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationWrite"></a>

```python
def reset_registration_write() -> None
```

##### `reset_service_config` <a name="reset_service_config" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetServiceConfig"></a>

```python
def reset_service_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IothubDpsSharedAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IothubDpsSharedAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IothubDpsSharedAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IothubDpsSharedAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IothubDpsSharedAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference">IothubDpsSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentReadInput">enrollment_read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWriteInput">enrollment_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsNameInput">iothub_dps_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationReadInput">registration_read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWriteInput">registration_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfigInput">service_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentRead">enrollment_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWrite">enrollment_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsName">iothub_dps_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationRead">registration_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWrite">registration_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfig">service_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeouts"></a>

```python
timeouts: IothubDpsSharedAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference">IothubDpsSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `enrollment_read_input`<sup>Optional</sup> <a name="enrollment_read_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentReadInput"></a>

```python
enrollment_read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enrollment_write_input`<sup>Optional</sup> <a name="enrollment_write_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWriteInput"></a>

```python
enrollment_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_dps_name_input`<sup>Optional</sup> <a name="iothub_dps_name_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsNameInput"></a>

```python
iothub_dps_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `registration_read_input`<sup>Optional</sup> <a name="registration_read_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationReadInput"></a>

```python
registration_read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `registration_write_input`<sup>Optional</sup> <a name="registration_write_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWriteInput"></a>

```python
registration_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_config_input`<sup>Optional</sup> <a name="service_config_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfigInput"></a>

```python
service_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IothubDpsSharedAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>]

---

##### `enrollment_read`<sup>Required</sup> <a name="enrollment_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentRead"></a>

```python
enrollment_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enrollment_write`<sup>Required</sup> <a name="enrollment_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWrite"></a>

```python
enrollment_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iothub_dps_name`<sup>Required</sup> <a name="iothub_dps_name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsName"></a>

```python
iothub_dps_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `registration_read`<sup>Required</sup> <a name="registration_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationRead"></a>

```python
registration_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `registration_write`<sup>Required</sup> <a name="registration_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWrite"></a>

```python
registration_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `service_config`<sup>Required</sup> <a name="service_config" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfig"></a>

```python
service_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IothubDpsSharedAccessPolicyConfig <a name="IothubDpsSharedAccessPolicyConfig" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iothub_dps_name: str,
  name: str,
  resource_group_name: str,
  enrollment_read: typing.Union[bool, IResolvable] = None,
  enrollment_write: typing.Union[bool, IResolvable] = None,
  id: str = None,
  registration_read: typing.Union[bool, IResolvable] = None,
  registration_write: typing.Union[bool, IResolvable] = None,
  service_config: typing.Union[bool, IResolvable] = None,
  timeouts: IothubDpsSharedAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.iothubDpsName">iothub_dps_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#iothub_dps_name IothubDpsSharedAccessPolicy#iothub_dps_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#name IothubDpsSharedAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#resource_group_name IothubDpsSharedAccessPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentRead">enrollment_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_read IothubDpsSharedAccessPolicy#enrollment_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentWrite">enrollment_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_write IothubDpsSharedAccessPolicy#enrollment_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#id IothubDpsSharedAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationRead">registration_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_read IothubDpsSharedAccessPolicy#registration_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationWrite">registration_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_write IothubDpsSharedAccessPolicy#registration_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.serviceConfig">service_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#service_config IothubDpsSharedAccessPolicy#service_config}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iothub_dps_name`<sup>Required</sup> <a name="iothub_dps_name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.iothubDpsName"></a>

```python
iothub_dps_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#iothub_dps_name IothubDpsSharedAccessPolicy#iothub_dps_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#name IothubDpsSharedAccessPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#resource_group_name IothubDpsSharedAccessPolicy#resource_group_name}.

---

##### `enrollment_read`<sup>Optional</sup> <a name="enrollment_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentRead"></a>

```python
enrollment_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_read IothubDpsSharedAccessPolicy#enrollment_read}.

---

##### `enrollment_write`<sup>Optional</sup> <a name="enrollment_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentWrite"></a>

```python
enrollment_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#enrollment_write IothubDpsSharedAccessPolicy#enrollment_write}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#id IothubDpsSharedAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registration_read`<sup>Optional</sup> <a name="registration_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationRead"></a>

```python
registration_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_read IothubDpsSharedAccessPolicy#registration_read}.

---

##### `registration_write`<sup>Optional</sup> <a name="registration_write" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationWrite"></a>

```python
registration_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#registration_write IothubDpsSharedAccessPolicy#registration_write}.

---

##### `service_config`<sup>Optional</sup> <a name="service_config" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.serviceConfig"></a>

```python
service_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#service_config IothubDpsSharedAccessPolicy#service_config}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: IothubDpsSharedAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#timeouts IothubDpsSharedAccessPolicy#timeouts}

---

### IothubDpsSharedAccessPolicyTimeouts <a name="IothubDpsSharedAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#create IothubDpsSharedAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#delete IothubDpsSharedAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#read IothubDpsSharedAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#update IothubDpsSharedAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#create IothubDpsSharedAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#delete IothubDpsSharedAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#read IothubDpsSharedAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/iothub_dps_shared_access_policy#update IothubDpsSharedAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubDpsSharedAccessPolicyTimeoutsOutputReference <a name="IothubDpsSharedAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_dps_shared_access_policy

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IothubDpsSharedAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>]

---



