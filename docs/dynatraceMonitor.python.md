# `dynatraceMonitor` Submodule <a name="`dynatraceMonitor` Submodule" id="@cdktf/provider-azurerm.dynatraceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceMonitor <a name="DynatraceMonitor" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor azurerm_dynatrace_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity: DynatraceMonitorIdentity,
  location: str,
  marketplace_subscription: str,
  name: str,
  plan: DynatraceMonitorPlan,
  resource_group_name: str,
  user: DynatraceMonitorUser,
  environment_properties: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentProperties]] = None,
  id: str = None,
  monitoring_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DynatraceMonitorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.marketplaceSubscription">marketplace_subscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.environmentProperties">environment_properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]</code> | environment_properties block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.monitoringEnabled">monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#identity DynatraceMonitor#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}.

---

##### `marketplace_subscription`<sup>Required</sup> <a name="marketplace_subscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.marketplaceSubscription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}.

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.user"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#user DynatraceMonitor#user}

---

##### `environment_properties`<sup>Optional</sup> <a name="environment_properties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.environmentProperties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]

environment_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#environment_properties DynatraceMonitor#environment_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitoring_enabled`<sup>Optional</sup> <a name="monitoring_enabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.monitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#timeouts DynatraceMonitor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties">put_environment_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetEnvironmentProperties">reset_environment_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled">reset_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_environment_properties` <a name="put_environment_properties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties"></a>

```python
def put_environment_properties(
  value: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity"></a>

```python
def put_identity(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}.

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan"></a>

```python
def put_plan(
  plan: str,
  billing_cycle: str = None,
  usage_type: str = None
) -> None
```

###### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan.parameter.plan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}.

---

###### `billing_cycle`<sup>Optional</sup> <a name="billing_cycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan.parameter.billingCycle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}.

---

###### `usage_type`<sup>Optional</sup> <a name="usage_type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan.parameter.usageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}.

---

##### `put_user` <a name="put_user" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser"></a>

```python
def put_user(
  country: str,
  email: str,
  first_name: str,
  last_name: str,
  phone_number: str
) -> None
```

###### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}.

---

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}.

---

###### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}.

---

###### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}.

---

###### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}.

---

##### `reset_environment_properties` <a name="reset_environment_properties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetEnvironmentProperties"></a>

```python
def reset_environment_properties() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monitoring_enabled` <a name="reset_monitoring_enabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled"></a>

```python
def reset_monitoring_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DynatraceMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DynatraceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentProperties">environment_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList">DynatraceMonitorEnvironmentPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentPropertiesInput">environment_properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput">marketplace_subscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput">monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription">marketplace_subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled">monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment_properties`<sup>Required</sup> <a name="environment_properties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentProperties"></a>

```python
environment_properties: DynatraceMonitorEnvironmentPropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList">DynatraceMonitorEnvironmentPropertiesList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity"></a>

```python
identity: DynatraceMonitorIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan"></a>

```python
plan: DynatraceMonitorPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts"></a>

```python
timeouts: DynatraceMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user"></a>

```python
user: DynatraceMonitorUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a>

---

##### `environment_properties_input`<sup>Optional</sup> <a name="environment_properties_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentPropertiesInput"></a>

```python
environment_properties_input: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput"></a>

```python
identity_input: DynatraceMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `marketplace_subscription_input`<sup>Optional</sup> <a name="marketplace_subscription_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput"></a>

```python
marketplace_subscription_input: str
```

- *Type:* str

---

##### `monitoring_enabled_input`<sup>Optional</sup> <a name="monitoring_enabled_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput"></a>

```python
monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput"></a>

```python
plan_input: DynatraceMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DynatraceMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput"></a>

```python
user_input: DynatraceMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `marketplace_subscription`<sup>Required</sup> <a name="marketplace_subscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription"></a>

```python
marketplace_subscription: str
```

- *Type:* str

---

##### `monitoring_enabled`<sup>Required</sup> <a name="monitoring_enabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled"></a>

```python
monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceMonitorConfig <a name="DynatraceMonitorConfig" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity: DynatraceMonitorIdentity,
  location: str,
  marketplace_subscription: str,
  name: str,
  plan: DynatraceMonitorPlan,
  resource_group_name: str,
  user: DynatraceMonitorUser,
  environment_properties: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentProperties]] = None,
  id: str = None,
  monitoring_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DynatraceMonitorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription">marketplace_subscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.environmentProperties">environment_properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]</code> | environment_properties block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled">monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity"></a>

```python
identity: DynatraceMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#identity DynatraceMonitor#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}.

---

##### `marketplace_subscription`<sup>Required</sup> <a name="marketplace_subscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription"></a>

```python
marketplace_subscription: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}.

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan"></a>

```python
plan: DynatraceMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user"></a>

```python
user: DynatraceMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#user DynatraceMonitor#user}

---

##### `environment_properties`<sup>Optional</sup> <a name="environment_properties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.environmentProperties"></a>

```python
environment_properties: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]

environment_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#environment_properties DynatraceMonitor#environment_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitoring_enabled`<sup>Optional</sup> <a name="monitoring_enabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled"></a>

```python
monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts"></a>

```python
timeouts: DynatraceMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#timeouts DynatraceMonitor#timeouts}

---

### DynatraceMonitorEnvironmentProperties <a name="DynatraceMonitorEnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorEnvironmentProperties(
  environment_info: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentPropertiesEnvironmentInfo]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.property.environmentInfo">environment_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]]</code> | environment_info block. |

---

##### `environment_info`<sup>Required</sup> <a name="environment_info" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.property.environmentInfo"></a>

```python
environment_info: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentPropertiesEnvironmentInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]]

environment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#environment_info DynatraceMonitor#environment_info}

---

### DynatraceMonitorEnvironmentPropertiesEnvironmentInfo <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo(
  environment_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#environment_id DynatraceMonitor#environment_id}. |

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#environment_id DynatraceMonitor#environment_id}.

---

### DynatraceMonitorIdentity <a name="DynatraceMonitorIdentity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorIdentity(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}.

---

### DynatraceMonitorPlan <a name="DynatraceMonitorPlan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorPlan(
  plan: str,
  billing_cycle: str = None,
  usage_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan">plan</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle">billing_cycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType">usage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}. |

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan"></a>

```python
plan: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}.

---

##### `billing_cycle`<sup>Optional</sup> <a name="billing_cycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle"></a>

```python
billing_cycle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}.

---

##### `usage_type`<sup>Optional</sup> <a name="usage_type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType"></a>

```python
usage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}.

---

### DynatraceMonitorTimeouts <a name="DynatraceMonitorTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}.

---

### DynatraceMonitorUser <a name="DynatraceMonitorUser" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorUser(
  country: str,
  email: str,
  first_name: str,
  last_name: str,
  phone_number: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}. |

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}.

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}.

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentPropertiesEnvironmentInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]]

---


### DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DynatraceMonitorEnvironmentPropertiesEnvironmentInfo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]

---


### DynatraceMonitorEnvironmentPropertiesList <a name="DynatraceMonitorEnvironmentPropertiesList" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynatraceMonitorEnvironmentPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]]

---


### DynatraceMonitorEnvironmentPropertiesOutputReference <a name="DynatraceMonitorEnvironmentPropertiesOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo">put_environment_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment_info` <a name="put_environment_info" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo"></a>

```python
def put_environment_info(
  value: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentPropertiesEnvironmentInfo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo">environment_info</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfoInput">environment_info_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_info`<sup>Required</sup> <a name="environment_info" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo"></a>

```python
environment_info: DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a>

---

##### `environment_info_input`<sup>Optional</sup> <a name="environment_info_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfoInput"></a>

```python
environment_info_input: typing.Union[IResolvable, typing.List[DynatraceMonitorEnvironmentPropertiesEnvironmentInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DynatraceMonitorEnvironmentProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>]

---


### DynatraceMonitorIdentityOutputReference <a name="DynatraceMonitorIdentityOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DynatraceMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---


### DynatraceMonitorPlanOutputReference <a name="DynatraceMonitorPlanOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle">reset_billing_cycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType">reset_usage_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_billing_cycle` <a name="reset_billing_cycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle"></a>

```python
def reset_billing_cycle() -> None
```

##### `reset_usage_type` <a name="reset_usage_type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType"></a>

```python
def reset_usage_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate">effective_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput">billing_cycle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput">usage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle">billing_cycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType">usage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_date`<sup>Required</sup> <a name="effective_date" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate"></a>

```python
effective_date: str
```

- *Type:* str

---

##### `billing_cycle_input`<sup>Optional</sup> <a name="billing_cycle_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput"></a>

```python
billing_cycle_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `usage_type_input`<sup>Optional</sup> <a name="usage_type_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput"></a>

```python
usage_type_input: str
```

- *Type:* str

---

##### `billing_cycle`<sup>Required</sup> <a name="billing_cycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle"></a>

```python
billing_cycle: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `usage_type`<sup>Required</sup> <a name="usage_type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType"></a>

```python
usage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue"></a>

```python
internal_value: DynatraceMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---


### DynatraceMonitorTimeoutsOutputReference <a name="DynatraceMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DynatraceMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>]

---


### DynatraceMonitorUserOutputReference <a name="DynatraceMonitorUserOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dynatrace_monitor

dynatraceMonitor.DynatraceMonitorUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue"></a>

```python
internal_value: DynatraceMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---



