# `servicebusQueueAuthorizationRule` Submodule <a name="`servicebusQueueAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusQueueAuthorizationRule <a name="ServicebusQueueAuthorizationRule" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule azurerm_servicebus_queue_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule(
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
  queue_id: str,
  id: str = None,
  listen: typing.Union[bool, IResolvable] = None,
  manage: typing.Union[bool, IResolvable] = None,
  send: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusQueueAuthorizationRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#name ServicebusQueueAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.queueId">queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#queue_id ServicebusQueueAuthorizationRule#queue_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#id ServicebusQueueAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#listen ServicebusQueueAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#manage ServicebusQueueAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#send ServicebusQueueAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#name ServicebusQueueAuthorizationRule#name}.

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.queueId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#queue_id ServicebusQueueAuthorizationRule#queue_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#id ServicebusQueueAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.listen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#listen ServicebusQueueAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.manage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#manage ServicebusQueueAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.send"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#send ServicebusQueueAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#timeouts ServicebusQueueAuthorizationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetListen">reset_listen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetManage">reset_manage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetSend">reset_send</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#create ServicebusQueueAuthorizationRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#delete ServicebusQueueAuthorizationRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#read ServicebusQueueAuthorizationRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#update ServicebusQueueAuthorizationRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_listen` <a name="reset_listen" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetListen"></a>

```python
def reset_listen() -> None
```

##### `reset_manage` <a name="reset_manage" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetManage"></a>

```python
def reset_manage() -> None
```

##### `reset_send` <a name="reset_send" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetSend"></a>

```python
def reset_send() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicebusQueueAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicebusQueueAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicebusQueueAuthorizationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicebusQueueAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusQueueAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias">primary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias">secondary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference">ServicebusQueueAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listenInput">listen_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manageInput">manage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueIdInput">queue_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.sendInput">send_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_connection_string_alias`<sup>Required</sup> <a name="primary_connection_string_alias" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias"></a>

```python
primary_connection_string_alias: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_connection_string_alias`<sup>Required</sup> <a name="secondary_connection_string_alias" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```python
secondary_connection_string_alias: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeouts"></a>

```python
timeouts: ServicebusQueueAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference">ServicebusQueueAuthorizationRuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listen_input`<sup>Optional</sup> <a name="listen_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listenInput"></a>

```python
listen_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_input`<sup>Optional</sup> <a name="manage_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manageInput"></a>

```python
manage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `queue_id_input`<sup>Optional</sup> <a name="queue_id_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueIdInput"></a>

```python
queue_id_input: str
```

- *Type:* str

---

##### `send_input`<sup>Optional</sup> <a name="send_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.sendInput"></a>

```python
send_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicebusQueueAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listen"></a>

```python
listen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manage"></a>

```python
manage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.send"></a>

```python
send: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusQueueAuthorizationRuleConfig <a name="ServicebusQueueAuthorizationRuleConfig" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  queue_id: str,
  id: str = None,
  listen: typing.Union[bool, IResolvable] = None,
  manage: typing.Union[bool, IResolvable] = None,
  send: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusQueueAuthorizationRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#name ServicebusQueueAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.queueId">queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#queue_id ServicebusQueueAuthorizationRule#queue_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#id ServicebusQueueAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#listen ServicebusQueueAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#manage ServicebusQueueAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#send ServicebusQueueAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#name ServicebusQueueAuthorizationRule#name}.

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#queue_id ServicebusQueueAuthorizationRule#queue_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#id ServicebusQueueAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.listen"></a>

```python
listen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#listen ServicebusQueueAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.manage"></a>

```python
manage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#manage ServicebusQueueAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.send"></a>

```python
send: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#send ServicebusQueueAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.timeouts"></a>

```python
timeouts: ServicebusQueueAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#timeouts ServicebusQueueAuthorizationRule#timeouts}

---

### ServicebusQueueAuthorizationRuleTimeouts <a name="ServicebusQueueAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#create ServicebusQueueAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#delete ServicebusQueueAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#read ServicebusQueueAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#update ServicebusQueueAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#create ServicebusQueueAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#delete ServicebusQueueAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#read ServicebusQueueAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/servicebus_queue_authorization_rule#update ServicebusQueueAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusQueueAuthorizationRuleTimeoutsOutputReference <a name="ServicebusQueueAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue_authorization_rule

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusQueueAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>]

---



