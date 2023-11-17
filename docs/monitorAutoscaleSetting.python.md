# `azurerm_monitor_autoscale_setting`

Refer to the Terraform Registory for docs: [`azurerm_monitor_autoscale_setting`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting).

# `monitorAutoscaleSetting` Submodule <a name="`monitorAutoscaleSetting` Submodule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAutoscaleSetting <a name="MonitorAutoscaleSetting" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting azurerm_monitor_autoscale_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSetting(
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
  profile: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfile]],
  resource_group_name: str,
  target_resource_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notification: MonitorAutoscaleSettingNotification = None,
  predictive: MonitorAutoscaleSettingPredictive = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorAutoscaleSettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.profile">profile</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]</code> | profile block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.predictive">predictive</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | predictive block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.profile"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]

profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#profile MonitorAutoscaleSetting#profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.notification"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#notification MonitorAutoscaleSetting#notification}

---

##### `predictive`<sup>Optional</sup> <a name="predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.predictive"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

predictive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#predictive MonitorAutoscaleSetting#predictive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timeouts MonitorAutoscaleSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive">put_predictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile">put_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetNotification">reset_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetPredictive">reset_predictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_notification` <a name="put_notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification"></a>

```python
def put_notification(
  email: MonitorAutoscaleSettingNotificationEmail = None,
  webhook: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingNotificationWebhook]] = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification.parameter.email"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#email MonitorAutoscaleSetting#email}

---

###### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification.parameter.webhook"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#webhook MonitorAutoscaleSetting#webhook}

---

##### `put_predictive` <a name="put_predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive"></a>

```python
def put_predictive(
  scale_mode: str,
  look_ahead_time: str = None
) -> None
```

###### `scale_mode`<sup>Required</sup> <a name="scale_mode" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive.parameter.scaleMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}.

---

###### `look_ahead_time`<sup>Optional</sup> <a name="look_ahead_time" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive.parameter.lookAheadTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}.

---

##### `put_profile` <a name="put_profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile"></a>

```python
def put_profile(
  value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfile]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification` <a name="reset_notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetNotification"></a>

```python
def reset_notification() -> None
```

##### `reset_predictive` <a name="reset_predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetPredictive"></a>

```python
def reset_predictive() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorAutoscaleSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorAutoscaleSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorAutoscaleSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorAutoscaleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAutoscaleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference">MonitorAutoscaleSettingNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictive">predictive</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference">MonitorAutoscaleSettingPredictiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profile">profile</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList">MonitorAutoscaleSettingProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference">MonitorAutoscaleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notificationInput">notification_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictiveInput">predictive_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profileInput">profile_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notification"></a>

```python
notification: MonitorAutoscaleSettingNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference">MonitorAutoscaleSettingNotificationOutputReference</a>

---

##### `predictive`<sup>Required</sup> <a name="predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictive"></a>

```python
predictive: MonitorAutoscaleSettingPredictiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference">MonitorAutoscaleSettingPredictiveOutputReference</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profile"></a>

```python
profile: MonitorAutoscaleSettingProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList">MonitorAutoscaleSettingProfileList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeouts"></a>

```python
timeouts: MonitorAutoscaleSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference">MonitorAutoscaleSettingTimeoutsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notificationInput"></a>

```python
notification_input: MonitorAutoscaleSettingNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---

##### `predictive_input`<sup>Optional</sup> <a name="predictive_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictiveInput"></a>

```python
predictive_input: MonitorAutoscaleSettingPredictive
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profileInput"></a>

```python
profile_input: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorAutoscaleSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAutoscaleSettingConfig <a name="MonitorAutoscaleSettingConfig" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  profile: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfile]],
  resource_group_name: str,
  target_resource_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notification: MonitorAutoscaleSettingNotification = None,
  predictive: MonitorAutoscaleSettingPredictive = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorAutoscaleSettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.profile">profile</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]</code> | profile block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.predictive">predictive</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | predictive block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.profile"></a>

```python
profile: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]

profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#profile MonitorAutoscaleSetting#profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.notification"></a>

```python
notification: MonitorAutoscaleSettingNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#notification MonitorAutoscaleSetting#notification}

---

##### `predictive`<sup>Optional</sup> <a name="predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.predictive"></a>

```python
predictive: MonitorAutoscaleSettingPredictive
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

predictive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#predictive MonitorAutoscaleSetting#predictive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.timeouts"></a>

```python
timeouts: MonitorAutoscaleSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timeouts MonitorAutoscaleSetting#timeouts}

---

### MonitorAutoscaleSettingNotification <a name="MonitorAutoscaleSettingNotification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingNotification(
  email: MonitorAutoscaleSettingNotificationEmail = None,
  webhook: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingNotificationWebhook]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.email">email</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.webhook">webhook</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]</code> | webhook block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.email"></a>

```python
email: MonitorAutoscaleSettingNotificationEmail
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#email MonitorAutoscaleSetting#email}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.webhook"></a>

```python
webhook: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingNotificationWebhook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#webhook MonitorAutoscaleSetting#webhook}

---

### MonitorAutoscaleSettingNotificationEmail <a name="MonitorAutoscaleSettingNotificationEmail" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail(
  custom_emails: typing.List[str] = None,
  send_to_subscription_administrator: typing.Union[bool, IResolvable] = None,
  send_to_subscription_co_administrator: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.customEmails">custom_emails</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionAdministrator">send_to_subscription_administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionCoAdministrator">send_to_subscription_co_administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}. |

---

##### `custom_emails`<sup>Optional</sup> <a name="custom_emails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.customEmails"></a>

```python
custom_emails: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}.

---

##### `send_to_subscription_administrator`<sup>Optional</sup> <a name="send_to_subscription_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionAdministrator"></a>

```python
send_to_subscription_administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}.

---

##### `send_to_subscription_co_administrator`<sup>Optional</sup> <a name="send_to_subscription_co_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionCoAdministrator"></a>

```python
send_to_subscription_co_administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}.

---

### MonitorAutoscaleSettingNotificationWebhook <a name="MonitorAutoscaleSettingNotificationWebhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook(
  service_uri: str,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.serviceUri">service_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#service_uri MonitorAutoscaleSetting#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#properties MonitorAutoscaleSetting#properties}. |

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#service_uri MonitorAutoscaleSetting#service_uri}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#properties MonitorAutoscaleSetting#properties}.

---

### MonitorAutoscaleSettingPredictive <a name="MonitorAutoscaleSettingPredictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive(
  scale_mode: str,
  look_ahead_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.scaleMode">scale_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.lookAheadTime">look_ahead_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}. |

---

##### `scale_mode`<sup>Required</sup> <a name="scale_mode" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.scaleMode"></a>

```python
scale_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}.

---

##### `look_ahead_time`<sup>Optional</sup> <a name="look_ahead_time" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.lookAheadTime"></a>

```python
look_ahead_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}.

---

### MonitorAutoscaleSettingProfile <a name="MonitorAutoscaleSettingProfile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfile(
  capacity: MonitorAutoscaleSettingProfileCapacity,
  name: str,
  fixed_date: MonitorAutoscaleSettingProfileFixedDate = None,
  recurrence: MonitorAutoscaleSettingProfileRecurrence = None,
  rule: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.fixedDate">fixed_date</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | fixed_date block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]]</code> | rule block. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.capacity"></a>

```python
capacity: MonitorAutoscaleSettingProfileCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#capacity MonitorAutoscaleSetting#capacity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `fixed_date`<sup>Optional</sup> <a name="fixed_date" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.fixedDate"></a>

```python
fixed_date: MonitorAutoscaleSettingProfileFixedDate
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

fixed_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#fixed_date MonitorAutoscaleSetting#fixed_date}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.recurrence"></a>

```python
recurrence: MonitorAutoscaleSettingProfileRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#recurrence MonitorAutoscaleSetting#recurrence}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#rule MonitorAutoscaleSetting#rule}

---

### MonitorAutoscaleSettingProfileCapacity <a name="MonitorAutoscaleSettingProfileCapacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity(
  default: typing.Union[int, float],
  maximum: typing.Union[int, float],
  minimum: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.default">default</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.default"></a>

```python
default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}.

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}.

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}.

---

### MonitorAutoscaleSettingProfileFixedDate <a name="MonitorAutoscaleSettingProfileFixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate(
  end: str,
  start: str,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

### MonitorAutoscaleSettingProfileRecurrence <a name="MonitorAutoscaleSettingProfileRecurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence(
  days: typing.List[str],
  hours: typing.List[typing.Union[int, float]],
  minutes: typing.List[typing.Union[int, float]],
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.days">days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.hours">hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.minutes">minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}.

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.hours"></a>

```python
hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.minutes"></a>

```python
minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

### MonitorAutoscaleSettingProfileRule <a name="MonitorAutoscaleSettingProfileRule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule(
  metric_trigger: MonitorAutoscaleSettingProfileRuleMetricTrigger,
  scale_action: MonitorAutoscaleSettingProfileRuleScaleAction
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.metricTrigger">metric_trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | metric_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.scaleAction">scale_action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | scale_action block. |

---

##### `metric_trigger`<sup>Required</sup> <a name="metric_trigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.metricTrigger"></a>

```python
metric_trigger: MonitorAutoscaleSettingProfileRuleMetricTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

metric_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_trigger MonitorAutoscaleSetting#metric_trigger}

---

##### `scale_action`<sup>Required</sup> <a name="scale_action" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.scaleAction"></a>

```python
scale_action: MonitorAutoscaleSettingProfileRuleScaleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

scale_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#scale_action MonitorAutoscaleSetting#scale_action}

---

### MonitorAutoscaleSettingProfileRuleMetricTrigger <a name="MonitorAutoscaleSettingProfileRuleMetricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger(
  metric_name: str,
  metric_resource_id: str,
  operator: str,
  statistic: str,
  threshold: typing.Union[int, float],
  time_aggregation: str,
  time_grain: str,
  time_window: str,
  dimensions: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions]] = None,
  divide_by_instance_count: typing.Union[bool, IResolvable] = None,
  metric_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricResourceId">metric_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeAggregation">time_aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeGrain">time_grain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeWindow">time_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.divideByInstanceCount">divide_by_instance_count</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}.

---

##### `metric_resource_id`<sup>Required</sup> <a name="metric_resource_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricResourceId"></a>

```python
metric_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}.

---

##### `time_aggregation`<sup>Required</sup> <a name="time_aggregation" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeAggregation"></a>

```python
time_aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}.

---

##### `time_grain`<sup>Required</sup> <a name="time_grain" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeGrain"></a>

```python
time_grain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}.

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeWindow"></a>

```python
time_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#dimensions MonitorAutoscaleSetting#dimensions}

---

##### `divide_by_instance_count`<sup>Optional</sup> <a name="divide_by_instance_count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.divideByInstanceCount"></a>

```python
divide_by_instance_count: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}.

---

##### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}.

---

### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions(
  name: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#values MonitorAutoscaleSetting#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#values MonitorAutoscaleSetting#values}.

---

### MonitorAutoscaleSettingProfileRuleScaleAction <a name="MonitorAutoscaleSettingProfileRuleScaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction(
  cooldown: str,
  direction: str,
  type: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.cooldown">cooldown</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}. |

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.cooldown"></a>

```python
cooldown: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}.

---

### MonitorAutoscaleSettingTimeouts <a name="MonitorAutoscaleSettingTimeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAutoscaleSettingNotificationEmailOutputReference <a name="MonitorAutoscaleSettingNotificationEmailOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetCustomEmails">reset_custom_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionAdministrator">reset_send_to_subscription_administrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionCoAdministrator">reset_send_to_subscription_co_administrator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_emails` <a name="reset_custom_emails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetCustomEmails"></a>

```python
def reset_custom_emails() -> None
```

##### `reset_send_to_subscription_administrator` <a name="reset_send_to_subscription_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionAdministrator"></a>

```python
def reset_send_to_subscription_administrator() -> None
```

##### `reset_send_to_subscription_co_administrator` <a name="reset_send_to_subscription_co_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionCoAdministrator"></a>

```python
def reset_send_to_subscription_co_administrator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmailsInput">custom_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministratorInput">send_to_subscription_administrator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministratorInput">send_to_subscription_co_administrator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmails">custom_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministrator">send_to_subscription_administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministrator">send_to_subscription_co_administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_emails_input`<sup>Optional</sup> <a name="custom_emails_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmailsInput"></a>

```python
custom_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `send_to_subscription_administrator_input`<sup>Optional</sup> <a name="send_to_subscription_administrator_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministratorInput"></a>

```python
send_to_subscription_administrator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_to_subscription_co_administrator_input`<sup>Optional</sup> <a name="send_to_subscription_co_administrator_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministratorInput"></a>

```python
send_to_subscription_co_administrator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_emails`<sup>Required</sup> <a name="custom_emails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmails"></a>

```python
custom_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `send_to_subscription_administrator`<sup>Required</sup> <a name="send_to_subscription_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministrator"></a>

```python
send_to_subscription_administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_to_subscription_co_administrator`<sup>Required</sup> <a name="send_to_subscription_co_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministrator"></a>

```python
send_to_subscription_co_administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingNotificationEmail
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---


### MonitorAutoscaleSettingNotificationOutputReference <a name="MonitorAutoscaleSettingNotificationOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail">put_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetWebhook">reset_webhook</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_email` <a name="put_email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail"></a>

```python
def put_email(
  custom_emails: typing.List[str] = None,
  send_to_subscription_administrator: typing.Union[bool, IResolvable] = None,
  send_to_subscription_co_administrator: typing.Union[bool, IResolvable] = None
) -> None
```

###### `custom_emails`<sup>Optional</sup> <a name="custom_emails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail.parameter.customEmails"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}.

---

###### `send_to_subscription_administrator`<sup>Optional</sup> <a name="send_to_subscription_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail.parameter.sendToSubscriptionAdministrator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}.

---

###### `send_to_subscription_co_administrator`<sup>Optional</sup> <a name="send_to_subscription_co_administrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail.parameter.sendToSubscriptionCoAdministrator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}.

---

##### `put_webhook` <a name="put_webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook"></a>

```python
def put_webhook(
  value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingNotificationWebhook]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]

---

##### `reset_email` <a name="reset_email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetWebhook"></a>

```python
def reset_webhook() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference">MonitorAutoscaleSettingNotificationEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList">MonitorAutoscaleSettingNotificationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.emailInput">email_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhookInput">webhook_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.email"></a>

```python
email: MonitorAutoscaleSettingNotificationEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference">MonitorAutoscaleSettingNotificationEmailOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhook"></a>

```python
webhook: MonitorAutoscaleSettingNotificationWebhookList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList">MonitorAutoscaleSettingNotificationWebhookList</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.emailInput"></a>

```python
email_input: MonitorAutoscaleSettingNotificationEmail
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhookInput"></a>

```python
webhook_input: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingNotificationWebhook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---


### MonitorAutoscaleSettingNotificationWebhookList <a name="MonitorAutoscaleSettingNotificationWebhookList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorAutoscaleSettingNotificationWebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingNotificationWebhook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]]

---


### MonitorAutoscaleSettingNotificationWebhookOutputReference <a name="MonitorAutoscaleSettingNotificationWebhookOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUriInput">service_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_uri_input`<sup>Optional</sup> <a name="service_uri_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUriInput"></a>

```python
service_uri_input: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAutoscaleSettingNotificationWebhook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>]

---


### MonitorAutoscaleSettingPredictiveOutputReference <a name="MonitorAutoscaleSettingPredictiveOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resetLookAheadTime">reset_look_ahead_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_look_ahead_time` <a name="reset_look_ahead_time" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resetLookAheadTime"></a>

```python
def reset_look_ahead_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTimeInput">look_ahead_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleModeInput">scale_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTime">look_ahead_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleMode">scale_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `look_ahead_time_input`<sup>Optional</sup> <a name="look_ahead_time_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTimeInput"></a>

```python
look_ahead_time_input: str
```

- *Type:* str

---

##### `scale_mode_input`<sup>Optional</sup> <a name="scale_mode_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleModeInput"></a>

```python
scale_mode_input: str
```

- *Type:* str

---

##### `look_ahead_time`<sup>Required</sup> <a name="look_ahead_time" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTime"></a>

```python
look_ahead_time: str
```

- *Type:* str

---

##### `scale_mode`<sup>Required</sup> <a name="scale_mode" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleMode"></a>

```python
scale_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingPredictive
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---


### MonitorAutoscaleSettingProfileCapacityOutputReference <a name="MonitorAutoscaleSettingProfileCapacityOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimumInput">minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.default">default</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimumInput"></a>

```python
minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.default"></a>

```python
default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingProfileCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---


### MonitorAutoscaleSettingProfileFixedDateOutputReference <a name="MonitorAutoscaleSettingProfileFixedDateOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingProfileFixedDate
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---


### MonitorAutoscaleSettingProfileList <a name="MonitorAutoscaleSettingProfileList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorAutoscaleSettingProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]]

---


### MonitorAutoscaleSettingProfileOutputReference <a name="MonitorAutoscaleSettingProfileOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate">put_fixed_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetFixedDate">reset_fixed_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRecurrence">reset_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity` <a name="put_capacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity"></a>

```python
def put_capacity(
  default: typing.Union[int, float],
  maximum: typing.Union[int, float],
  minimum: typing.Union[int, float]
) -> None
```

###### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity.parameter.default"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}.

---

###### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity.parameter.maximum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}.

---

###### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity.parameter.minimum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}.

---

##### `put_fixed_date` <a name="put_fixed_date" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate"></a>

```python
def put_fixed_date(
  end: str,
  start: str,
  timezone: str = None
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}.

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence"></a>

```python
def put_recurrence(
  days: typing.List[str],
  hours: typing.List[typing.Union[int, float]],
  minutes: typing.List[typing.Union[int, float]],
  timezone: str = None
) -> None
```

###### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence.parameter.days"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}.

---

###### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence.parameter.hours"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}.

---

###### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence.parameter.minutes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}.

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]]

---

##### `reset_fixed_date` <a name="reset_fixed_date" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetFixedDate"></a>

```python
def reset_fixed_date() -> None
```

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference">MonitorAutoscaleSettingProfileCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDate">fixed_date</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference">MonitorAutoscaleSettingProfileFixedDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference">MonitorAutoscaleSettingProfileRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList">MonitorAutoscaleSettingProfileRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacityInput">capacity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDateInput">fixed_date_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacity"></a>

```python
capacity: MonitorAutoscaleSettingProfileCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference">MonitorAutoscaleSettingProfileCapacityOutputReference</a>

---

##### `fixed_date`<sup>Required</sup> <a name="fixed_date" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDate"></a>

```python
fixed_date: MonitorAutoscaleSettingProfileFixedDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference">MonitorAutoscaleSettingProfileFixedDateOutputReference</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrence"></a>

```python
recurrence: MonitorAutoscaleSettingProfileRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference">MonitorAutoscaleSettingProfileRecurrenceOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.rule"></a>

```python
rule: MonitorAutoscaleSettingProfileRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList">MonitorAutoscaleSettingProfileRuleList</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacityInput"></a>

```python
capacity_input: MonitorAutoscaleSettingProfileCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---

##### `fixed_date_input`<sup>Optional</sup> <a name="fixed_date_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDateInput"></a>

```python
fixed_date_input: MonitorAutoscaleSettingProfileFixedDate
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: MonitorAutoscaleSettingProfileRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAutoscaleSettingProfile]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>]

---


### MonitorAutoscaleSettingProfileRecurrenceOutputReference <a name="MonitorAutoscaleSettingProfileRecurrenceOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.days">days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hours">hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutes">minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.daysInput"></a>

```python
days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hoursInput"></a>

```python
hours_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hours"></a>

```python
hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutes"></a>

```python
minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingProfileRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---


### MonitorAutoscaleSettingProfileRuleList <a name="MonitorAutoscaleSettingProfileRuleList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorAutoscaleSettingProfileRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]]

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDivideByInstanceCount">reset_divide_by_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetMetricNamespace">reset_metric_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_divide_by_instance_count` <a name="reset_divide_by_instance_count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDivideByInstanceCount"></a>

```python
def reset_divide_by_instance_count() -> None
```

##### `reset_metric_namespace` <a name="reset_metric_namespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetMetricNamespace"></a>

```python
def reset_metric_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCountInput">divide_by_instance_count_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespaceInput">metric_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceIdInput">metric_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregationInput">time_aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrainInput">time_grain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindowInput">time_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCount">divide_by_instance_count</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceId">metric_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregation">time_aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrain">time_grain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindow">time_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensions"></a>

```python
dimensions: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]

---

##### `divide_by_instance_count_input`<sup>Optional</sup> <a name="divide_by_instance_count_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCountInput"></a>

```python
divide_by_instance_count_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_namespace_input`<sup>Optional</sup> <a name="metric_namespace_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespaceInput"></a>

```python
metric_namespace_input: str
```

- *Type:* str

---

##### `metric_resource_id_input`<sup>Optional</sup> <a name="metric_resource_id_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceIdInput"></a>

```python
metric_resource_id_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_aggregation_input`<sup>Optional</sup> <a name="time_aggregation_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregationInput"></a>

```python
time_aggregation_input: str
```

- *Type:* str

---

##### `time_grain_input`<sup>Optional</sup> <a name="time_grain_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrainInput"></a>

```python
time_grain_input: str
```

- *Type:* str

---

##### `time_window_input`<sup>Optional</sup> <a name="time_window_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindowInput"></a>

```python
time_window_input: str
```

- *Type:* str

---

##### `divide_by_instance_count`<sup>Required</sup> <a name="divide_by_instance_count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCount"></a>

```python
divide_by_instance_count: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `metric_resource_id`<sup>Required</sup> <a name="metric_resource_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceId"></a>

```python
metric_resource_id: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_aggregation`<sup>Required</sup> <a name="time_aggregation" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregation"></a>

```python
time_aggregation: str
```

- *Type:* str

---

##### `time_grain`<sup>Required</sup> <a name="time_grain" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrain"></a>

```python
time_grain: str
```

- *Type:* str

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindow"></a>

```python
time_window: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingProfileRuleMetricTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---


### MonitorAutoscaleSettingProfileRuleOutputReference <a name="MonitorAutoscaleSettingProfileRuleOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger">put_metric_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction">put_scale_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_trigger` <a name="put_metric_trigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger"></a>

```python
def put_metric_trigger(
  metric_name: str,
  metric_resource_id: str,
  operator: str,
  statistic: str,
  threshold: typing.Union[int, float],
  time_aggregation: str,
  time_grain: str,
  time_window: str,
  dimensions: typing.Union[IResolvable, typing.List[MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions]] = None,
  divide_by_instance_count: typing.Union[bool, IResolvable] = None,
  metric_namespace: str = None
) -> None
```

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}.

---

###### `metric_resource_id`<sup>Required</sup> <a name="metric_resource_id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.metricResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}.

---

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}.

---

###### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.statistic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}.

---

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}.

---

###### `time_aggregation`<sup>Required</sup> <a name="time_aggregation" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.timeAggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}.

---

###### `time_grain`<sup>Required</sup> <a name="time_grain" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.timeGrain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}.

---

###### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.timeWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.dimensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#dimensions MonitorAutoscaleSetting#dimensions}

---

###### `divide_by_instance_count`<sup>Optional</sup> <a name="divide_by_instance_count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.divideByInstanceCount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}.

---

###### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.metricNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}.

---

##### `put_scale_action` <a name="put_scale_action" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction"></a>

```python
def put_scale_action(
  cooldown: str,
  direction: str,
  type: str,
  value: typing.Union[int, float]
) -> None
```

###### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction.parameter.cooldown"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}.

---

###### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction.parameter.direction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTrigger">metric_trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference">MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleAction">scale_action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference">MonitorAutoscaleSettingProfileRuleScaleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTriggerInput">metric_trigger_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleActionInput">scale_action_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_trigger`<sup>Required</sup> <a name="metric_trigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTrigger"></a>

```python
metric_trigger: MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference">MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference</a>

---

##### `scale_action`<sup>Required</sup> <a name="scale_action" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleAction"></a>

```python
scale_action: MonitorAutoscaleSettingProfileRuleScaleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference">MonitorAutoscaleSettingProfileRuleScaleActionOutputReference</a>

---

##### `metric_trigger_input`<sup>Optional</sup> <a name="metric_trigger_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTriggerInput"></a>

```python
metric_trigger_input: MonitorAutoscaleSettingProfileRuleMetricTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---

##### `scale_action_input`<sup>Optional</sup> <a name="scale_action_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleActionInput"></a>

```python
scale_action_input: MonitorAutoscaleSettingProfileRuleScaleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAutoscaleSettingProfileRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>]

---


### MonitorAutoscaleSettingProfileRuleScaleActionOutputReference <a name="MonitorAutoscaleSettingProfileRuleScaleActionOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldown">cooldown</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldownInput"></a>

```python
cooldown_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldown"></a>

```python
cooldown: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAutoscaleSettingProfileRuleScaleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---


### MonitorAutoscaleSettingTimeoutsOutputReference <a name="MonitorAutoscaleSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_autoscale_setting

monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAutoscaleSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>]

---



