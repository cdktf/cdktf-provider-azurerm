# `containerConnectedRegistry` Submodule <a name="`containerConnectedRegistry` Submodule" id="@cdktf/provider-azurerm.containerConnectedRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerConnectedRegistry <a name="ContainerConnectedRegistry" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry azurerm_container_connected_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_registry_id: str,
  name: str,
  sync_token_id: str,
  audit_log_enabled: typing.Union[bool, IResolvable] = None,
  client_token_ids: typing.List[str] = None,
  id: str = None,
  log_level: str = None,
  mode: str = None,
  notification: typing.Union[IResolvable, typing.List[ContainerConnectedRegistryNotification]] = None,
  parent_registry_id: str = None,
  sync_message_ttl: str = None,
  sync_schedule: str = None,
  sync_window: str = None,
  timeouts: ContainerConnectedRegistryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.containerRegistryId">container_registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncTokenId">sync_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.auditLogEnabled">audit_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.clientTokenIds">client_token_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.parentRegistryId">parent_registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncMessageTtl">sync_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncSchedule">sync_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncWindow">sync_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_registry_id`<sup>Required</sup> <a name="container_registry_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.containerRegistryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}.

---

##### `sync_token_id`<sup>Required</sup> <a name="sync_token_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncTokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}.

---

##### `audit_log_enabled`<sup>Optional</sup> <a name="audit_log_enabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.auditLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}.

---

##### `client_token_ids`<sup>Optional</sup> <a name="client_token_ids" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.clientTokenIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.notification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#notification ContainerConnectedRegistry#notification}

---

##### `parent_registry_id`<sup>Optional</sup> <a name="parent_registry_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.parentRegistryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}.

---

##### `sync_message_ttl`<sup>Optional</sup> <a name="sync_message_ttl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncMessageTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}.

---

##### `sync_schedule`<sup>Optional</sup> <a name="sync_schedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}.

---

##### `sync_window`<sup>Optional</sup> <a name="sync_window" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.syncWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#timeouts ContainerConnectedRegistry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetAuditLogEnabled">reset_audit_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetClientTokenIds">reset_client_token_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetNotification">reset_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetParentRegistryId">reset_parent_registry_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncMessageTtl">reset_sync_message_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncSchedule">reset_sync_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncWindow">reset_sync_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification` <a name="put_notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification"></a>

```python
def put_notification(
  value: typing.Union[IResolvable, typing.List[ContainerConnectedRegistryNotification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}.

---

##### `reset_audit_log_enabled` <a name="reset_audit_log_enabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetAuditLogEnabled"></a>

```python
def reset_audit_log_enabled() -> None
```

##### `reset_client_token_ids` <a name="reset_client_token_ids" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetClientTokenIds"></a>

```python
def reset_client_token_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_notification` <a name="reset_notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetNotification"></a>

```python
def reset_notification() -> None
```

##### `reset_parent_registry_id` <a name="reset_parent_registry_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetParentRegistryId"></a>

```python
def reset_parent_registry_id() -> None
```

##### `reset_sync_message_ttl` <a name="reset_sync_message_ttl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncMessageTtl"></a>

```python
def reset_sync_message_ttl() -> None
```

##### `reset_sync_schedule` <a name="reset_sync_schedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncSchedule"></a>

```python
def reset_sync_schedule() -> None
```

##### `reset_sync_window` <a name="reset_sync_window" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncWindow"></a>

```python
def reset_sync_window() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerConnectedRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerConnectedRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerConnectedRegistry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerConnectedRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerConnectedRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList">ContainerConnectedRegistryNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference">ContainerConnectedRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabledInput">audit_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIdsInput">client_token_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryIdInput">container_registry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryIdInput">parent_registry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtlInput">sync_message_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncScheduleInput">sync_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenIdInput">sync_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindowInput">sync_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabled">audit_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIds">client_token_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryId">container_registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryId">parent_registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtl">sync_message_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncSchedule">sync_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenId">sync_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindow">sync_window</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notification"></a>

```python
notification: ContainerConnectedRegistryNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList">ContainerConnectedRegistryNotificationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeouts"></a>

```python
timeouts: ContainerConnectedRegistryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference">ContainerConnectedRegistryTimeoutsOutputReference</a>

---

##### `audit_log_enabled_input`<sup>Optional</sup> <a name="audit_log_enabled_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabledInput"></a>

```python
audit_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_token_ids_input`<sup>Optional</sup> <a name="client_token_ids_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIdsInput"></a>

```python
client_token_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_registry_id_input`<sup>Optional</sup> <a name="container_registry_id_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryIdInput"></a>

```python
container_registry_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, typing.List[ContainerConnectedRegistryNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]

---

##### `parent_registry_id_input`<sup>Optional</sup> <a name="parent_registry_id_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryIdInput"></a>

```python
parent_registry_id_input: str
```

- *Type:* str

---

##### `sync_message_ttl_input`<sup>Optional</sup> <a name="sync_message_ttl_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtlInput"></a>

```python
sync_message_ttl_input: str
```

- *Type:* str

---

##### `sync_schedule_input`<sup>Optional</sup> <a name="sync_schedule_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncScheduleInput"></a>

```python
sync_schedule_input: str
```

- *Type:* str

---

##### `sync_token_id_input`<sup>Optional</sup> <a name="sync_token_id_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenIdInput"></a>

```python
sync_token_id_input: str
```

- *Type:* str

---

##### `sync_window_input`<sup>Optional</sup> <a name="sync_window_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindowInput"></a>

```python
sync_window_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerConnectedRegistryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>]

---

##### `audit_log_enabled`<sup>Required</sup> <a name="audit_log_enabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabled"></a>

```python
audit_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_token_ids`<sup>Required</sup> <a name="client_token_ids" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIds"></a>

```python
client_token_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_registry_id`<sup>Required</sup> <a name="container_registry_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryId"></a>

```python
container_registry_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_registry_id`<sup>Required</sup> <a name="parent_registry_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryId"></a>

```python
parent_registry_id: str
```

- *Type:* str

---

##### `sync_message_ttl`<sup>Required</sup> <a name="sync_message_ttl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtl"></a>

```python
sync_message_ttl: str
```

- *Type:* str

---

##### `sync_schedule`<sup>Required</sup> <a name="sync_schedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncSchedule"></a>

```python
sync_schedule: str
```

- *Type:* str

---

##### `sync_token_id`<sup>Required</sup> <a name="sync_token_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenId"></a>

```python
sync_token_id: str
```

- *Type:* str

---

##### `sync_window`<sup>Required</sup> <a name="sync_window" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindow"></a>

```python
sync_window: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerConnectedRegistryConfig <a name="ContainerConnectedRegistryConfig" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_registry_id: str,
  name: str,
  sync_token_id: str,
  audit_log_enabled: typing.Union[bool, IResolvable] = None,
  client_token_ids: typing.List[str] = None,
  id: str = None,
  log_level: str = None,
  mode: str = None,
  notification: typing.Union[IResolvable, typing.List[ContainerConnectedRegistryNotification]] = None,
  parent_registry_id: str = None,
  sync_message_ttl: str = None,
  sync_schedule: str = None,
  sync_window: str = None,
  timeouts: ContainerConnectedRegistryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.containerRegistryId">container_registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncTokenId">sync_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.auditLogEnabled">audit_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.clientTokenIds">client_token_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.parentRegistryId">parent_registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncMessageTtl">sync_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncSchedule">sync_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncWindow">sync_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_registry_id`<sup>Required</sup> <a name="container_registry_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.containerRegistryId"></a>

```python
container_registry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}.

---

##### `sync_token_id`<sup>Required</sup> <a name="sync_token_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncTokenId"></a>

```python
sync_token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}.

---

##### `audit_log_enabled`<sup>Optional</sup> <a name="audit_log_enabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.auditLogEnabled"></a>

```python
audit_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}.

---

##### `client_token_ids`<sup>Optional</sup> <a name="client_token_ids" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.clientTokenIds"></a>

```python
client_token_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.notification"></a>

```python
notification: typing.Union[IResolvable, typing.List[ContainerConnectedRegistryNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#notification ContainerConnectedRegistry#notification}

---

##### `parent_registry_id`<sup>Optional</sup> <a name="parent_registry_id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.parentRegistryId"></a>

```python
parent_registry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}.

---

##### `sync_message_ttl`<sup>Optional</sup> <a name="sync_message_ttl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncMessageTtl"></a>

```python
sync_message_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}.

---

##### `sync_schedule`<sup>Optional</sup> <a name="sync_schedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncSchedule"></a>

```python
sync_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}.

---

##### `sync_window`<sup>Optional</sup> <a name="sync_window" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncWindow"></a>

```python
sync_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.timeouts"></a>

```python
timeouts: ContainerConnectedRegistryTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#timeouts ContainerConnectedRegistry#timeouts}

---

### ContainerConnectedRegistryNotification <a name="ContainerConnectedRegistryNotification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistryNotification(
  action: str,
  name: str,
  digest: str = None,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#action ContainerConnectedRegistry#action}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.digest">digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#digest ContainerConnectedRegistry#digest}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#tag ContainerConnectedRegistry#tag}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#action ContainerConnectedRegistry#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.digest"></a>

```python
digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#digest ContainerConnectedRegistry#digest}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#tag ContainerConnectedRegistry#tag}.

---

### ContainerConnectedRegistryTimeouts <a name="ContainerConnectedRegistryTimeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistryTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerConnectedRegistryNotificationList <a name="ContainerConnectedRegistryNotificationList" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistryNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerConnectedRegistryNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerConnectedRegistryNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]]

---


### ContainerConnectedRegistryNotificationOutputReference <a name="ContainerConnectedRegistryNotificationOutputReference" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetDigest">reset_digest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_digest` <a name="reset_digest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetDigest"></a>

```python
def reset_digest() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digestInput">digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `digest_input`<sup>Optional</sup> <a name="digest_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digestInput"></a>

```python
digest_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerConnectedRegistryNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification">ContainerConnectedRegistryNotification</a>]

---


### ContainerConnectedRegistryTimeoutsOutputReference <a name="ContainerConnectedRegistryTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_connected_registry

containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerConnectedRegistryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>]

---



