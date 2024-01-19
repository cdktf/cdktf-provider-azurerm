# `logzSubAccountTagRule` Submodule <a name="`logzSubAccountTagRule` Submodule" id="@cdktf/provider-azurerm.logzSubAccountTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogzSubAccountTagRule <a name="LogzSubAccountTagRule" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule azurerm_logz_sub_account_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  logz_sub_account_id: str,
  id: str = None,
  send_aad_logs: typing.Union[bool, IResolvable] = None,
  send_activity_logs: typing.Union[bool, IResolvable] = None,
  send_subscription_logs: typing.Union[bool, IResolvable] = None,
  tag_filter: typing.Union[IResolvable, typing.List[LogzSubAccountTagRuleTagFilter]] = None,
  timeouts: LogzSubAccountTagRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.logzSubAccountId">logz_sub_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendAadLogs">send_aad_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendActivityLogs">send_activity_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendSubscriptionLogs">send_subscription_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.tagFilter">tag_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]</code> | tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logz_sub_account_id`<sup>Required</sup> <a name="logz_sub_account_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.logzSubAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_aad_logs`<sup>Optional</sup> <a name="send_aad_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendAadLogs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}.

---

##### `send_activity_logs`<sup>Optional</sup> <a name="send_activity_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendActivityLogs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}.

---

##### `send_subscription_logs`<sup>Optional</sup> <a name="send_subscription_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendSubscriptionLogs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}.

---

##### `tag_filter`<sup>Optional</sup> <a name="tag_filter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.tagFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#tag_filter LogzSubAccountTagRule#tag_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#timeouts LogzSubAccountTagRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter">put_tag_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendAadLogs">reset_send_aad_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendActivityLogs">reset_send_activity_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendSubscriptionLogs">reset_send_subscription_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTagFilter">reset_tag_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tag_filter` <a name="put_tag_filter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter"></a>

```python
def put_tag_filter(
  value: typing.Union[IResolvable, typing.List[LogzSubAccountTagRuleTagFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#create LogzSubAccountTagRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#delete LogzSubAccountTagRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#read LogzSubAccountTagRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#update LogzSubAccountTagRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_send_aad_logs` <a name="reset_send_aad_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendAadLogs"></a>

```python
def reset_send_aad_logs() -> None
```

##### `reset_send_activity_logs` <a name="reset_send_activity_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendActivityLogs"></a>

```python
def reset_send_activity_logs() -> None
```

##### `reset_send_subscription_logs` <a name="reset_send_subscription_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendSubscriptionLogs"></a>

```python
def reset_send_subscription_logs() -> None
```

##### `reset_tag_filter` <a name="reset_tag_filter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTagFilter"></a>

```python
def reset_tag_filter() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogzSubAccountTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogzSubAccountTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogzSubAccountTagRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogzSubAccountTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogzSubAccountTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilter">tag_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList">LogzSubAccountTagRuleTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference">LogzSubAccountTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountIdInput">logz_sub_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogsInput">send_aad_logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogsInput">send_activity_logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogsInput">send_subscription_logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilterInput">tag_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountId">logz_sub_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogs">send_aad_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogs">send_activity_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogs">send_subscription_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tag_filter`<sup>Required</sup> <a name="tag_filter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilter"></a>

```python
tag_filter: LogzSubAccountTagRuleTagFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList">LogzSubAccountTagRuleTagFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeouts"></a>

```python
timeouts: LogzSubAccountTagRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference">LogzSubAccountTagRuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logz_sub_account_id_input`<sup>Optional</sup> <a name="logz_sub_account_id_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountIdInput"></a>

```python
logz_sub_account_id_input: str
```

- *Type:* str

---

##### `send_aad_logs_input`<sup>Optional</sup> <a name="send_aad_logs_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogsInput"></a>

```python
send_aad_logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_activity_logs_input`<sup>Optional</sup> <a name="send_activity_logs_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogsInput"></a>

```python
send_activity_logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_subscription_logs_input`<sup>Optional</sup> <a name="send_subscription_logs_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogsInput"></a>

```python
send_subscription_logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_filter_input`<sup>Optional</sup> <a name="tag_filter_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilterInput"></a>

```python
tag_filter_input: typing.Union[IResolvable, typing.List[LogzSubAccountTagRuleTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogzSubAccountTagRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logz_sub_account_id`<sup>Required</sup> <a name="logz_sub_account_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountId"></a>

```python
logz_sub_account_id: str
```

- *Type:* str

---

##### `send_aad_logs`<sup>Required</sup> <a name="send_aad_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogs"></a>

```python
send_aad_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_activity_logs`<sup>Required</sup> <a name="send_activity_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogs"></a>

```python
send_activity_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_subscription_logs`<sup>Required</sup> <a name="send_subscription_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogs"></a>

```python
send_subscription_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogzSubAccountTagRuleConfig <a name="LogzSubAccountTagRuleConfig" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  logz_sub_account_id: str,
  id: str = None,
  send_aad_logs: typing.Union[bool, IResolvable] = None,
  send_activity_logs: typing.Union[bool, IResolvable] = None,
  send_subscription_logs: typing.Union[bool, IResolvable] = None,
  tag_filter: typing.Union[IResolvable, typing.List[LogzSubAccountTagRuleTagFilter]] = None,
  timeouts: LogzSubAccountTagRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.logzSubAccountId">logz_sub_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendAadLogs">send_aad_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendActivityLogs">send_activity_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendSubscriptionLogs">send_subscription_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.tagFilter">tag_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]</code> | tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logz_sub_account_id`<sup>Required</sup> <a name="logz_sub_account_id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.logzSubAccountId"></a>

```python
logz_sub_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_aad_logs`<sup>Optional</sup> <a name="send_aad_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendAadLogs"></a>

```python
send_aad_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}.

---

##### `send_activity_logs`<sup>Optional</sup> <a name="send_activity_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendActivityLogs"></a>

```python
send_activity_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}.

---

##### `send_subscription_logs`<sup>Optional</sup> <a name="send_subscription_logs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendSubscriptionLogs"></a>

```python
send_subscription_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}.

---

##### `tag_filter`<sup>Optional</sup> <a name="tag_filter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.tagFilter"></a>

```python
tag_filter: typing.Union[IResolvable, typing.List[LogzSubAccountTagRuleTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#tag_filter LogzSubAccountTagRule#tag_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.timeouts"></a>

```python
timeouts: LogzSubAccountTagRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#timeouts LogzSubAccountTagRule#timeouts}

---

### LogzSubAccountTagRuleTagFilter <a name="LogzSubAccountTagRuleTagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter(
  action: str,
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#action LogzSubAccountTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#name LogzSubAccountTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#value LogzSubAccountTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#action LogzSubAccountTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#name LogzSubAccountTagRule#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#value LogzSubAccountTagRule#value}.

---

### LogzSubAccountTagRuleTimeouts <a name="LogzSubAccountTagRuleTimeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#create LogzSubAccountTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#delete LogzSubAccountTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#read LogzSubAccountTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#update LogzSubAccountTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#create LogzSubAccountTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#delete LogzSubAccountTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#read LogzSubAccountTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logz_sub_account_tag_rule#update LogzSubAccountTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogzSubAccountTagRuleTagFilterList <a name="LogzSubAccountTagRuleTagFilterList" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogzSubAccountTagRuleTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogzSubAccountTagRuleTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]]

---


### LogzSubAccountTagRuleTagFilterOutputReference <a name="LogzSubAccountTagRuleTagFilterOutputReference" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogzSubAccountTagRuleTagFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>]

---


### LogzSubAccountTagRuleTimeoutsOutputReference <a name="LogzSubAccountTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logz_sub_account_tag_rule

logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogzSubAccountTagRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>]

---



