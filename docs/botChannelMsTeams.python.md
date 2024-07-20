# `botChannelMsTeams` Submodule <a name="`botChannelMsTeams` Submodule" id="@cdktf/provider-azurerm.botChannelMsTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelMsTeams <a name="BotChannelMsTeams" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams azurerm_bot_channel_ms_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeams(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  location: str,
  resource_group_name: str,
  calling_web_hook: str = None,
  deployment_environment: str = None,
  enable_calling: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: BotChannelMsTeamsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#bot_name BotChannelMsTeams#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#location BotChannelMsTeams#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#resource_group_name BotChannelMsTeams#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.callingWebHook">calling_web_hook</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#calling_web_hook BotChannelMsTeams#calling_web_hook}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.deploymentEnvironment">deployment_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#deployment_environment BotChannelMsTeams#deployment_environment}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.enableCalling">enable_calling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#enable_calling BotChannelMsTeams#enable_calling}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#id BotChannelMsTeams#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.botName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#bot_name BotChannelMsTeams#bot_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#location BotChannelMsTeams#location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#resource_group_name BotChannelMsTeams#resource_group_name}.

---

##### `calling_web_hook`<sup>Optional</sup> <a name="calling_web_hook" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.callingWebHook"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#calling_web_hook BotChannelMsTeams#calling_web_hook}.

---

##### `deployment_environment`<sup>Optional</sup> <a name="deployment_environment" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.deploymentEnvironment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#deployment_environment BotChannelMsTeams#deployment_environment}.

---

##### `enable_calling`<sup>Optional</sup> <a name="enable_calling" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.enableCalling"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#enable_calling BotChannelMsTeams#enable_calling}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#id BotChannelMsTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#timeouts BotChannelMsTeams#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetCallingWebHook">reset_calling_web_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetDeploymentEnvironment">reset_deployment_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetEnableCalling">reset_enable_calling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#create BotChannelMsTeams#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#delete BotChannelMsTeams#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#read BotChannelMsTeams#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#update BotChannelMsTeams#update}.

---

##### `reset_calling_web_hook` <a name="reset_calling_web_hook" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetCallingWebHook"></a>

```python
def reset_calling_web_hook() -> None
```

##### `reset_deployment_environment` <a name="reset_deployment_environment" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetDeploymentEnvironment"></a>

```python
def reset_deployment_environment() -> None
```

##### `reset_enable_calling` <a name="reset_enable_calling" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetEnableCalling"></a>

```python
def reset_enable_calling() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BotChannelMsTeams resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeams.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeams.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeams.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeams.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BotChannelMsTeams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BotChannelMsTeams to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BotChannelMsTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BotChannelMsTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference">BotChannelMsTeamsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botNameInput">bot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHookInput">calling_web_hook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironmentInput">deployment_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCallingInput">enable_calling_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botName">bot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHook">calling_web_hook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironment">deployment_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCalling">enable_calling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeouts"></a>

```python
timeouts: BotChannelMsTeamsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference">BotChannelMsTeamsTimeoutsOutputReference</a>

---

##### `bot_name_input`<sup>Optional</sup> <a name="bot_name_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botNameInput"></a>

```python
bot_name_input: str
```

- *Type:* str

---

##### `calling_web_hook_input`<sup>Optional</sup> <a name="calling_web_hook_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHookInput"></a>

```python
calling_web_hook_input: str
```

- *Type:* str

---

##### `deployment_environment_input`<sup>Optional</sup> <a name="deployment_environment_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironmentInput"></a>

```python
deployment_environment_input: str
```

- *Type:* str

---

##### `enable_calling_input`<sup>Optional</sup> <a name="enable_calling_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCallingInput"></a>

```python
enable_calling_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BotChannelMsTeamsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

---

##### `calling_web_hook`<sup>Required</sup> <a name="calling_web_hook" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHook"></a>

```python
calling_web_hook: str
```

- *Type:* str

---

##### `deployment_environment`<sup>Required</sup> <a name="deployment_environment" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironment"></a>

```python
deployment_environment: str
```

- *Type:* str

---

##### `enable_calling`<sup>Required</sup> <a name="enable_calling" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCalling"></a>

```python
enable_calling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelMsTeamsConfig <a name="BotChannelMsTeamsConfig" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeamsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  location: str,
  resource_group_name: str,
  calling_web_hook: str = None,
  deployment_environment: str = None,
  enable_calling: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: BotChannelMsTeamsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#bot_name BotChannelMsTeams#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#location BotChannelMsTeams#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#resource_group_name BotChannelMsTeams#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.callingWebHook">calling_web_hook</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#calling_web_hook BotChannelMsTeams#calling_web_hook}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.deploymentEnvironment">deployment_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#deployment_environment BotChannelMsTeams#deployment_environment}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.enableCalling">enable_calling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#enable_calling BotChannelMsTeams#enable_calling}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#id BotChannelMsTeams#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#bot_name BotChannelMsTeams#bot_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#location BotChannelMsTeams#location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#resource_group_name BotChannelMsTeams#resource_group_name}.

---

##### `calling_web_hook`<sup>Optional</sup> <a name="calling_web_hook" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.callingWebHook"></a>

```python
calling_web_hook: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#calling_web_hook BotChannelMsTeams#calling_web_hook}.

---

##### `deployment_environment`<sup>Optional</sup> <a name="deployment_environment" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.deploymentEnvironment"></a>

```python
deployment_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#deployment_environment BotChannelMsTeams#deployment_environment}.

---

##### `enable_calling`<sup>Optional</sup> <a name="enable_calling" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.enableCalling"></a>

```python
enable_calling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#enable_calling BotChannelMsTeams#enable_calling}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#id BotChannelMsTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.timeouts"></a>

```python
timeouts: BotChannelMsTeamsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#timeouts BotChannelMsTeams#timeouts}

---

### BotChannelMsTeamsTimeouts <a name="BotChannelMsTeamsTimeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeamsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#create BotChannelMsTeams#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#delete BotChannelMsTeams#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#read BotChannelMsTeams#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#update BotChannelMsTeams#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#create BotChannelMsTeams#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#delete BotChannelMsTeams#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#read BotChannelMsTeams#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/bot_channel_ms_teams#update BotChannelMsTeams#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelMsTeamsTimeoutsOutputReference <a name="BotChannelMsTeamsTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_ms_teams

botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BotChannelMsTeamsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>]

---



