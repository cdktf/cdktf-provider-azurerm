# `notificationHubAuthorizationRule` Submodule <a name="`notificationHubAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationHubAuthorizationRule <a name="NotificationHubAuthorizationRule" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule azurerm_notification_hub_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  namespace_name: str,
  notification_hub_name: str,
  resource_group_name: str,
  id: str = None,
  listen: typing.Union[bool, IResolvable] = None,
  manage: typing.Union[bool, IResolvable] = None,
  send: typing.Union[bool, IResolvable] = None,
  timeouts: NotificationHubAuthorizationRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.notificationHubName">notification_hub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}.

---

##### `notification_hub_name`<sup>Required</sup> <a name="notification_hub_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.notificationHubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.listen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.manage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.send"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#timeouts NotificationHubAuthorizationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetListen">reset_listen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetManage">reset_manage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetSend">reset_send</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#create NotificationHubAuthorizationRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#delete NotificationHubAuthorizationRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#read NotificationHubAuthorizationRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#update NotificationHubAuthorizationRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_listen` <a name="reset_listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetListen"></a>

```python
def reset_listen() -> None
```

##### `reset_manage` <a name="reset_manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetManage"></a>

```python
def reset_manage() -> None
```

##### `reset_send` <a name="reset_send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetSend"></a>

```python
def reset_send() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationHubAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationHubAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationHubAuthorizationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationHubAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationHubAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference">NotificationHubAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listenInput">listen_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manageInput">manage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubNameInput">notification_hub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.sendInput">send_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubName">notification_hub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeouts"></a>

```python
timeouts: NotificationHubAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference">NotificationHubAuthorizationRuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listen_input`<sup>Optional</sup> <a name="listen_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listenInput"></a>

```python
listen_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_input`<sup>Optional</sup> <a name="manage_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manageInput"></a>

```python
manage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `notification_hub_name_input`<sup>Optional</sup> <a name="notification_hub_name_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubNameInput"></a>

```python
notification_hub_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `send_input`<sup>Optional</sup> <a name="send_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.sendInput"></a>

```python
send_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NotificationHubAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listen"></a>

```python
listen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manage"></a>

```python
manage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `notification_hub_name`<sup>Required</sup> <a name="notification_hub_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubName"></a>

```python
notification_hub_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.send"></a>

```python
send: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationHubAuthorizationRuleConfig <a name="NotificationHubAuthorizationRuleConfig" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  namespace_name: str,
  notification_hub_name: str,
  resource_group_name: str,
  id: str = None,
  listen: typing.Union[bool, IResolvable] = None,
  manage: typing.Union[bool, IResolvable] = None,
  send: typing.Union[bool, IResolvable] = None,
  timeouts: NotificationHubAuthorizationRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.notificationHubName">notification_hub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}.

---

##### `notification_hub_name`<sup>Required</sup> <a name="notification_hub_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.notificationHubName"></a>

```python
notification_hub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.listen"></a>

```python
listen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.manage"></a>

```python
manage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.send"></a>

```python
send: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.timeouts"></a>

```python
timeouts: NotificationHubAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#timeouts NotificationHubAuthorizationRule#timeouts}

---

### NotificationHubAuthorizationRuleTimeouts <a name="NotificationHubAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#create NotificationHubAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#delete NotificationHubAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#read NotificationHubAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#update NotificationHubAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#create NotificationHubAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#delete NotificationHubAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#read NotificationHubAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/notification_hub_authorization_rule#update NotificationHubAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationHubAuthorizationRuleTimeoutsOutputReference <a name="NotificationHubAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub_authorization_rule

notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationHubAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>]

---



