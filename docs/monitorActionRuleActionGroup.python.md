# `monitorActionRuleActionGroup` Submodule <a name="`monitorActionRuleActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionRuleActionGroup <a name="MonitorActionRuleActionGroup" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group azurerm_monitor_action_rule_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_group_id: str,
  name: str,
  resource_group_name: str,
  condition: MonitorActionRuleActionGroupCondition = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  scope: MonitorActionRuleActionGroupScope = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorActionRuleActionGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.actionGroupId">action_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.actionGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#condition MonitorActionRuleActionGroup#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#scope MonitorActionRuleActionGroup#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#timeouts MonitorActionRuleActionGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition"></a>

```python
def put_condition(
  alert_context: MonitorActionRuleActionGroupConditionAlertContext = None,
  alert_rule_id: MonitorActionRuleActionGroupConditionAlertRuleId = None,
  description: MonitorActionRuleActionGroupConditionDescription = None,
  monitor: MonitorActionRuleActionGroupConditionMonitor = None,
  monitor_service: MonitorActionRuleActionGroupConditionMonitorService = None,
  severity: MonitorActionRuleActionGroupConditionSeverity = None,
  target_resource_type: MonitorActionRuleActionGroupConditionTargetResourceType = None
) -> None
```

###### `alert_context`<sup>Optional</sup> <a name="alert_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.alertContext"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#alert_context MonitorActionRuleActionGroup#alert_context}

---

###### `alert_rule_id`<sup>Optional</sup> <a name="alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.alertRuleId"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.description"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}

---

###### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#monitor MonitorActionRuleActionGroup#monitor}

---

###### `monitor_service`<sup>Optional</sup> <a name="monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.monitorService"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#monitor_service MonitorActionRuleActionGroup#monitor_service}

---

###### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.severity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#severity MonitorActionRuleActionGroup#severity}

---

###### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.targetResourceType"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#target_resource_type MonitorActionRuleActionGroup#target_resource_type}

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope"></a>

```python
def put_scope(
  resource_ids: typing.List[str],
  type: str
) -> None
```

###### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope.parameter.resourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorActionRuleActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorActionRuleActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorActionRuleActionGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorActionRuleActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActionRuleActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput">action_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId">action_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition"></a>

```python
condition: MonitorActionRuleActionGroupConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope"></a>

```python
scope: MonitorActionRuleActionGroupScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts"></a>

```python
timeouts: MonitorActionRuleActionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a>

---

##### `action_group_id_input`<sup>Optional</sup> <a name="action_group_id_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput"></a>

```python
action_group_id_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput"></a>

```python
condition_input: MonitorActionRuleActionGroupCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput"></a>

```python
scope_input: MonitorActionRuleActionGroupScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorActionRuleActionGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>]

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId"></a>

```python
action_group_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionRuleActionGroupCondition <a name="MonitorActionRuleActionGroupCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition(
  alert_context: MonitorActionRuleActionGroupConditionAlertContext = None,
  alert_rule_id: MonitorActionRuleActionGroupConditionAlertRuleId = None,
  description: MonitorActionRuleActionGroupConditionDescription = None,
  monitor: MonitorActionRuleActionGroupConditionMonitor = None,
  monitor_service: MonitorActionRuleActionGroupConditionMonitorService = None,
  severity: MonitorActionRuleActionGroupConditionSeverity = None,
  target_resource_type: MonitorActionRuleActionGroupConditionTargetResourceType = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext">alert_context</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId">alert_rule_id</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService">monitor_service</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType">target_resource_type</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `alert_context`<sup>Optional</sup> <a name="alert_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext"></a>

```python
alert_context: MonitorActionRuleActionGroupConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#alert_context MonitorActionRuleActionGroup#alert_context}

---

##### `alert_rule_id`<sup>Optional</sup> <a name="alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId"></a>

```python
alert_rule_id: MonitorActionRuleActionGroupConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description"></a>

```python
description: MonitorActionRuleActionGroupConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor"></a>

```python
monitor: MonitorActionRuleActionGroupConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#monitor MonitorActionRuleActionGroup#monitor}

---

##### `monitor_service`<sup>Optional</sup> <a name="monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService"></a>

```python
monitor_service: MonitorActionRuleActionGroupConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#monitor_service MonitorActionRuleActionGroup#monitor_service}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity"></a>

```python
severity: MonitorActionRuleActionGroupConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#severity MonitorActionRuleActionGroup#severity}

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType"></a>

```python
target_resource_type: MonitorActionRuleActionGroupConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#target_resource_type MonitorActionRuleActionGroup#target_resource_type}

---

### MonitorActionRuleActionGroupConditionAlertContext <a name="MonitorActionRuleActionGroupConditionAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionAlertRuleId <a name="MonitorActionRuleActionGroupConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionDescription <a name="MonitorActionRuleActionGroupConditionDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitor <a name="MonitorActionRuleActionGroupConditionMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitorService <a name="MonitorActionRuleActionGroupConditionMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionSeverity <a name="MonitorActionRuleActionGroupConditionSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionTargetResourceType <a name="MonitorActionRuleActionGroupConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConfig <a name="MonitorActionRuleActionGroupConfig" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_group_id: str,
  name: str,
  resource_group_name: str,
  condition: MonitorActionRuleActionGroupCondition = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  scope: MonitorActionRuleActionGroupScope = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorActionRuleActionGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId">action_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId"></a>

```python
action_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition"></a>

```python
condition: MonitorActionRuleActionGroupCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#condition MonitorActionRuleActionGroup#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope"></a>

```python
scope: MonitorActionRuleActionGroupScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#scope MonitorActionRuleActionGroup#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts"></a>

```python
timeouts: MonitorActionRuleActionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#timeouts MonitorActionRuleActionGroup#timeouts}

---

### MonitorActionRuleActionGroupScope <a name="MonitorActionRuleActionGroupScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope(
  resource_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}. |

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}.

---

### MonitorActionRuleActionGroupTimeouts <a name="MonitorActionRuleActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionRuleActionGroupConditionAlertContextOutputReference <a name="MonitorActionRuleActionGroupConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---


### MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference <a name="MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---


### MonitorActionRuleActionGroupConditionDescriptionOutputReference <a name="MonitorActionRuleActionGroupConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---


### MonitorActionRuleActionGroupConditionMonitorOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---


### MonitorActionRuleActionGroupConditionMonitorServiceOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---


### MonitorActionRuleActionGroupConditionOutputReference <a name="MonitorActionRuleActionGroupConditionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext">put_alert_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId">put_alert_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription">put_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService">put_monitor_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity">put_severity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType">put_target_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext">reset_alert_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId">reset_alert_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService">reset_monitor_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType">reset_target_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alert_context` <a name="put_alert_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext"></a>

```python
def put_alert_context(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

##### `put_alert_rule_id` <a name="put_alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId"></a>

```python
def put_alert_rule_id(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

##### `put_description` <a name="put_description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription"></a>

```python
def put_description(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor"></a>

```python
def put_monitor(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

##### `put_monitor_service` <a name="put_monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService"></a>

```python
def put_monitor_service(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

##### `put_severity` <a name="put_severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity"></a>

```python
def put_severity(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

##### `put_target_resource_type` <a name="put_target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType"></a>

```python
def put_target_resource_type(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

##### `reset_alert_context` <a name="reset_alert_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext"></a>

```python
def reset_alert_context() -> None
```

##### `reset_alert_rule_id` <a name="reset_alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId"></a>

```python
def reset_alert_rule_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_monitor_service` <a name="reset_monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService"></a>

```python
def reset_monitor_service() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_target_resource_type` <a name="reset_target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType"></a>

```python
def reset_target_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext">alert_context</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId">alert_rule_id</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService">monitor_service</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType">target_resource_type</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput">alert_context_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput">alert_rule_id_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput">description_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput">monitor_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput">monitor_service_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput">severity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput">target_resource_type_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alert_context`<sup>Required</sup> <a name="alert_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext"></a>

```python
alert_context: MonitorActionRuleActionGroupConditionAlertContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a>

---

##### `alert_rule_id`<sup>Required</sup> <a name="alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId"></a>

```python
alert_rule_id: MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description"></a>

```python
description: MonitorActionRuleActionGroupConditionDescriptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor"></a>

```python
monitor: MonitorActionRuleActionGroupConditionMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a>

---

##### `monitor_service`<sup>Required</sup> <a name="monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService"></a>

```python
monitor_service: MonitorActionRuleActionGroupConditionMonitorServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity"></a>

```python
severity: MonitorActionRuleActionGroupConditionSeverityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a>

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType"></a>

```python
target_resource_type: MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a>

---

##### `alert_context_input`<sup>Optional</sup> <a name="alert_context_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput"></a>

```python
alert_context_input: MonitorActionRuleActionGroupConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---

##### `alert_rule_id_input`<sup>Optional</sup> <a name="alert_rule_id_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput"></a>

```python
alert_rule_id_input: MonitorActionRuleActionGroupConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput"></a>

```python
description_input: MonitorActionRuleActionGroupConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput"></a>

```python
monitor_input: MonitorActionRuleActionGroupConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---

##### `monitor_service_input`<sup>Optional</sup> <a name="monitor_service_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput"></a>

```python
monitor_service_input: MonitorActionRuleActionGroupConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput"></a>

```python
severity_input: MonitorActionRuleActionGroupConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---

##### `target_resource_type_input`<sup>Optional</sup> <a name="target_resource_type_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput"></a>

```python
target_resource_type_input: MonitorActionRuleActionGroupConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---


### MonitorActionRuleActionGroupConditionSeverityOutputReference <a name="MonitorActionRuleActionGroupConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---


### MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference <a name="MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---


### MonitorActionRuleActionGroupScopeOutputReference <a name="MonitorActionRuleActionGroupScopeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput">resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput"></a>

```python
resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleActionGroupScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---


### MonitorActionRuleActionGroupTimeoutsOutputReference <a name="MonitorActionRuleActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_action_group

monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionRuleActionGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>]

---



