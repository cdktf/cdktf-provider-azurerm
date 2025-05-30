# `iothubFileUpload` Submodule <a name="`iothubFileUpload` Submodule" id="@cdktf/provider-azurerm.iothubFileUpload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubFileUploadA <a name="IothubFileUploadA" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload azurerm_iothub_file_upload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_string: str,
  container_name: str,
  iothub_id: str,
  authentication_type: str = None,
  default_ttl: str = None,
  id: str = None,
  identity_id: str = None,
  lock_duration: str = None,
  max_delivery_count: typing.Union[int, float] = None,
  notifications_enabled: typing.Union[bool, IResolvable] = None,
  sas_ttl: str = None,
  timeouts: IothubFileUploadTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#connection_string IothubFileUploadA#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#container_name IothubFileUploadA#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#iothub_id IothubFileUploadA#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#authentication_type IothubFileUploadA#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.defaultTtl">default_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#default_ttl IothubFileUploadA#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#id IothubFileUploadA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#identity_id IothubFileUploadA#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#lock_duration IothubFileUploadA#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#max_delivery_count IothubFileUploadA#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.notificationsEnabled">notifications_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#notifications_enabled IothubFileUploadA#notifications_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.sasTtl">sas_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#sas_ttl IothubFileUploadA#sas_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#connection_string IothubFileUploadA#connection_string}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#container_name IothubFileUploadA#container_name}.

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.iothubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#iothub_id IothubFileUploadA#iothub_id}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#authentication_type IothubFileUploadA#authentication_type}.

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.defaultTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#default_ttl IothubFileUploadA#default_ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#id IothubFileUploadA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.identityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#identity_id IothubFileUploadA#identity_id}.

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.lockDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#lock_duration IothubFileUploadA#lock_duration}.

---

##### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.maxDeliveryCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#max_delivery_count IothubFileUploadA#max_delivery_count}.

---

##### `notifications_enabled`<sup>Optional</sup> <a name="notifications_enabled" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.notificationsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#notifications_enabled IothubFileUploadA#notifications_enabled}.

---

##### `sas_ttl`<sup>Optional</sup> <a name="sas_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.sasTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#sas_ttl IothubFileUploadA#sas_ttl}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#timeouts IothubFileUploadA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetLockDuration">reset_lock_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetMaxDeliveryCount">reset_max_delivery_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetNotificationsEnabled">reset_notifications_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetSasTtl">reset_sas_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#create IothubFileUploadA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#delete IothubFileUploadA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#read IothubFileUploadA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#update IothubFileUploadA#update}.

---

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_lock_duration` <a name="reset_lock_duration" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetLockDuration"></a>

```python
def reset_lock_duration() -> None
```

##### `reset_max_delivery_count` <a name="reset_max_delivery_count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetMaxDeliveryCount"></a>

```python
def reset_max_delivery_count() -> None
```

##### `reset_notifications_enabled` <a name="reset_notifications_enabled" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetNotificationsEnabled"></a>

```python
def reset_notifications_enabled() -> None
```

##### `reset_sas_ttl` <a name="reset_sas_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetSasTtl"></a>

```python
def reset_sas_ttl() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IothubFileUploadA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IothubFileUploadA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IothubFileUploadA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IothubFileUploadA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IothubFileUploadA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference">IothubFileUploadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtlInput">default_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubIdInput">iothub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDurationInput">lock_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCountInput">max_delivery_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabledInput">notifications_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtlInput">sas_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtl">default_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubId">iothub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDuration">lock_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabled">notifications_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtl">sas_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeouts"></a>

```python
timeouts: IothubFileUploadTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference">IothubFileUploadTimeoutsOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtlInput"></a>

```python
default_ttl_input: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_id_input`<sup>Optional</sup> <a name="iothub_id_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubIdInput"></a>

```python
iothub_id_input: str
```

- *Type:* str

---

##### `lock_duration_input`<sup>Optional</sup> <a name="lock_duration_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDurationInput"></a>

```python
lock_duration_input: str
```

- *Type:* str

---

##### `max_delivery_count_input`<sup>Optional</sup> <a name="max_delivery_count_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCountInput"></a>

```python
max_delivery_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notifications_enabled_input`<sup>Optional</sup> <a name="notifications_enabled_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabledInput"></a>

```python
notifications_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sas_ttl_input`<sup>Optional</sup> <a name="sas_ttl_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtlInput"></a>

```python
sas_ttl_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IothubFileUploadTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

---

##### `lock_duration`<sup>Required</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notifications_enabled`<sup>Required</sup> <a name="notifications_enabled" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabled"></a>

```python
notifications_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sas_ttl`<sup>Required</sup> <a name="sas_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtl"></a>

```python
sas_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IothubFileUploadAConfig <a name="IothubFileUploadAConfig" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_string: str,
  container_name: str,
  iothub_id: str,
  authentication_type: str = None,
  default_ttl: str = None,
  id: str = None,
  identity_id: str = None,
  lock_duration: str = None,
  max_delivery_count: typing.Union[int, float] = None,
  notifications_enabled: typing.Union[bool, IResolvable] = None,
  sas_ttl: str = None,
  timeouts: IothubFileUploadTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#connection_string IothubFileUploadA#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#container_name IothubFileUploadA#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#iothub_id IothubFileUploadA#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#authentication_type IothubFileUploadA#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.defaultTtl">default_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#default_ttl IothubFileUploadA#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#id IothubFileUploadA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#identity_id IothubFileUploadA#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#lock_duration IothubFileUploadA#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#max_delivery_count IothubFileUploadA#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.notificationsEnabled">notifications_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#notifications_enabled IothubFileUploadA#notifications_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.sasTtl">sas_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#sas_ttl IothubFileUploadA#sas_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#connection_string IothubFileUploadA#connection_string}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#container_name IothubFileUploadA#container_name}.

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#iothub_id IothubFileUploadA#iothub_id}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#authentication_type IothubFileUploadA#authentication_type}.

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#default_ttl IothubFileUploadA#default_ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#id IothubFileUploadA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#identity_id IothubFileUploadA#identity_id}.

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#lock_duration IothubFileUploadA#lock_duration}.

---

##### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#max_delivery_count IothubFileUploadA#max_delivery_count}.

---

##### `notifications_enabled`<sup>Optional</sup> <a name="notifications_enabled" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.notificationsEnabled"></a>

```python
notifications_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#notifications_enabled IothubFileUploadA#notifications_enabled}.

---

##### `sas_ttl`<sup>Optional</sup> <a name="sas_ttl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.sasTtl"></a>

```python
sas_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#sas_ttl IothubFileUploadA#sas_ttl}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.timeouts"></a>

```python
timeouts: IothubFileUploadTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#timeouts IothubFileUploadA#timeouts}

---

### IothubFileUploadTimeouts <a name="IothubFileUploadTimeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#create IothubFileUploadA#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#delete IothubFileUploadA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#read IothubFileUploadA#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#update IothubFileUploadA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#create IothubFileUploadA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#delete IothubFileUploadA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#read IothubFileUploadA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/iothub_file_upload#update IothubFileUploadA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubFileUploadTimeoutsOutputReference <a name="IothubFileUploadTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_file_upload

iothubFileUpload.IothubFileUploadTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IothubFileUploadTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>]

---



