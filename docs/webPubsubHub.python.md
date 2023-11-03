# `azurerm_web_pubsub_hub`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_hub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub).

# `webPubsubHub` Submodule <a name="`webPubsubHub` Submodule" id="@cdktf/provider-azurerm.webPubsubHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubHub <a name="WebPubsubHub" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub azurerm_web_pubsub_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHub(
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
  web_pubsub_id: str,
  anonymous_connections_enabled: typing.Union[bool, IResolvable] = None,
  event_handler: typing.Union[IResolvable, typing.List[WebPubsubHubEventHandler]] = None,
  event_listener: typing.Union[IResolvable, typing.List[WebPubsubHubEventListener]] = None,
  id: str = None,
  timeouts: WebPubsubHubTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.anonymousConnectionsEnabled">anonymous_connections_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventHandler">event_handler</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]</code> | event_handler block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventListener">event_listener</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]</code> | event_listener block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}.

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.webPubsubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}.

---

##### `anonymous_connections_enabled`<sup>Optional</sup> <a name="anonymous_connections_enabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.anonymousConnectionsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}.

---

##### `event_handler`<sup>Optional</sup> <a name="event_handler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventHandler"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]

event_handler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#event_handler WebPubsubHub#event_handler}

---

##### `event_listener`<sup>Optional</sup> <a name="event_listener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventListener"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]

event_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#event_listener WebPubsubHub#event_listener}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#timeouts WebPubsubHub#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler">put_event_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener">put_event_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled">reset_anonymous_connections_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler">reset_event_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener">reset_event_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_event_handler` <a name="put_event_handler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler"></a>

```python
def put_event_handler(
  value: typing.Union[IResolvable, typing.List[WebPubsubHubEventHandler]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]

---

##### `put_event_listener` <a name="put_event_listener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener"></a>

```python
def put_event_listener(
  value: typing.Union[IResolvable, typing.List[WebPubsubHubEventListener]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}.

---

##### `reset_anonymous_connections_enabled` <a name="reset_anonymous_connections_enabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled"></a>

```python
def reset_anonymous_connections_enabled() -> None
```

##### `reset_event_handler` <a name="reset_event_handler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler"></a>

```python
def reset_event_handler() -> None
```

##### `reset_event_listener` <a name="reset_event_listener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener"></a>

```python
def reset_event_listener() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WebPubsubHub resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHub.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHub.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHub.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WebPubsubHub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WebPubsubHub to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WebPubsubHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsubHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler">event_handler</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener">event_listener</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput">anonymous_connections_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput">event_handler_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput">event_listener_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput">web_pubsub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled">anonymous_connections_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_handler`<sup>Required</sup> <a name="event_handler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler"></a>

```python
event_handler: WebPubsubHubEventHandlerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a>

---

##### `event_listener`<sup>Required</sup> <a name="event_listener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener"></a>

```python
event_listener: WebPubsubHubEventListenerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts"></a>

```python
timeouts: WebPubsubHubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a>

---

##### `anonymous_connections_enabled_input`<sup>Optional</sup> <a name="anonymous_connections_enabled_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput"></a>

```python
anonymous_connections_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_handler_input`<sup>Optional</sup> <a name="event_handler_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput"></a>

```python
event_handler_input: typing.Union[IResolvable, typing.List[WebPubsubHubEventHandler]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]

---

##### `event_listener_input`<sup>Optional</sup> <a name="event_listener_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput"></a>

```python
event_listener_input: typing.Union[IResolvable, typing.List[WebPubsubHubEventListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebPubsubHubTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>]

---

##### `web_pubsub_id_input`<sup>Optional</sup> <a name="web_pubsub_id_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput"></a>

```python
web_pubsub_id_input: str
```

- *Type:* str

---

##### `anonymous_connections_enabled`<sup>Required</sup> <a name="anonymous_connections_enabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled"></a>

```python
anonymous_connections_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubHubConfig <a name="WebPubsubHubConfig" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  web_pubsub_id: str,
  anonymous_connections_enabled: typing.Union[bool, IResolvable] = None,
  event_handler: typing.Union[IResolvable, typing.List[WebPubsubHubEventHandler]] = None,
  event_listener: typing.Union[IResolvable, typing.List[WebPubsubHubEventListener]] = None,
  id: str = None,
  timeouts: WebPubsubHubTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled">anonymous_connections_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler">event_handler</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]</code> | event_handler block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener">event_listener</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]</code> | event_listener block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}.

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}.

---

##### `anonymous_connections_enabled`<sup>Optional</sup> <a name="anonymous_connections_enabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled"></a>

```python
anonymous_connections_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}.

---

##### `event_handler`<sup>Optional</sup> <a name="event_handler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler"></a>

```python
event_handler: typing.Union[IResolvable, typing.List[WebPubsubHubEventHandler]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]

event_handler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#event_handler WebPubsubHub#event_handler}

---

##### `event_listener`<sup>Optional</sup> <a name="event_listener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener"></a>

```python
event_listener: typing.Union[IResolvable, typing.List[WebPubsubHubEventListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]

event_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#event_listener WebPubsubHub#event_listener}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts"></a>

```python
timeouts: WebPubsubHubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#timeouts WebPubsubHub#timeouts}

---

### WebPubsubHubEventHandler <a name="WebPubsubHubEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventHandler(
  url_template: str,
  auth: WebPubsubHubEventHandlerAuth = None,
  system_events: typing.List[str] = None,
  user_event_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate">url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents">system_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern">user_event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}. |

---

##### `url_template`<sup>Required</sup> <a name="url_template" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate"></a>

```python
url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth"></a>

```python
auth: WebPubsubHubEventHandlerAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#auth WebPubsubHub#auth}

---

##### `system_events`<sup>Optional</sup> <a name="system_events" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents"></a>

```python
system_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}.

---

##### `user_event_pattern`<sup>Optional</sup> <a name="user_event_pattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern"></a>

```python
user_event_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}.

---

### WebPubsubHubEventHandlerAuth <a name="WebPubsubHubEventHandlerAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventHandlerAuth(
  managed_identity_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}. |

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}.

---

### WebPubsubHubEventListener <a name="WebPubsubHubEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventListener(
  eventhub_name: str,
  eventhub_namespace_name: str,
  system_event_name_filter: typing.List[str] = None,
  user_event_name_filter: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName">eventhub_namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter">system_event_name_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter">user_event_name_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}. |

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}.

---

##### `eventhub_namespace_name`<sup>Required</sup> <a name="eventhub_namespace_name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName"></a>

```python
eventhub_namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}.

---

##### `system_event_name_filter`<sup>Optional</sup> <a name="system_event_name_filter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter"></a>

```python
system_event_name_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}.

---

##### `user_event_name_filter`<sup>Optional</sup> <a name="user_event_name_filter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter"></a>

```python
user_event_name_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}.

---

### WebPubsubHubTimeouts <a name="WebPubsubHubTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubHubEventHandlerAuthOutputReference <a name="WebPubsubHubEventHandlerAuthOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput">managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_identity_id_input`<sup>Optional</sup> <a name="managed_identity_id_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput"></a>

```python
managed_identity_id_input: str
```

- *Type:* str

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue"></a>

```python
internal_value: WebPubsubHubEventHandlerAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---


### WebPubsubHubEventHandlerList <a name="WebPubsubHubEventHandlerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventHandlerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebPubsubHubEventHandlerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebPubsubHubEventHandler]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]]

---


### WebPubsubHubEventHandlerOutputReference <a name="WebPubsubHubEventHandlerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventHandlerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth">put_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth">reset_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents">reset_system_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern">reset_user_event_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth` <a name="put_auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth"></a>

```python
def put_auth(
  managed_identity_id: str
) -> None
```

###### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth.parameter.managedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}.

---

##### `reset_auth` <a name="reset_auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth"></a>

```python
def reset_auth() -> None
```

##### `reset_system_events` <a name="reset_system_events" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents"></a>

```python
def reset_system_events() -> None
```

##### `reset_user_event_pattern` <a name="reset_user_event_pattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern"></a>

```python
def reset_user_event_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput">auth_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput">system_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput">url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput">user_event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents">system_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate">url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern">user_event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth"></a>

```python
auth: WebPubsubHubEventHandlerAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a>

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput"></a>

```python
auth_input: WebPubsubHubEventHandlerAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---

##### `system_events_input`<sup>Optional</sup> <a name="system_events_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput"></a>

```python
system_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_template_input`<sup>Optional</sup> <a name="url_template_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput"></a>

```python
url_template_input: str
```

- *Type:* str

---

##### `user_event_pattern_input`<sup>Optional</sup> <a name="user_event_pattern_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput"></a>

```python
user_event_pattern_input: str
```

- *Type:* str

---

##### `system_events`<sup>Required</sup> <a name="system_events" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents"></a>

```python
system_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_template`<sup>Required</sup> <a name="url_template" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate"></a>

```python
url_template: str
```

- *Type:* str

---

##### `user_event_pattern`<sup>Required</sup> <a name="user_event_pattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern"></a>

```python
user_event_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubHubEventHandler]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>]

---


### WebPubsubHubEventListenerList <a name="WebPubsubHubEventListenerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventListenerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebPubsubHubEventListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebPubsubHubEventListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]]

---


### WebPubsubHubEventListenerOutputReference <a name="WebPubsubHubEventListenerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubEventListenerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter">reset_system_event_name_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter">reset_user_event_name_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_system_event_name_filter` <a name="reset_system_event_name_filter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter"></a>

```python
def reset_system_event_name_filter() -> None
```

##### `reset_user_event_name_filter` <a name="reset_user_event_name_filter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter"></a>

```python
def reset_user_event_name_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput">eventhub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput">eventhub_namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput">system_event_name_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput">user_event_name_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName">eventhub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName">eventhub_namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter">system_event_name_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter">user_event_name_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eventhub_name_input`<sup>Optional</sup> <a name="eventhub_name_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput"></a>

```python
eventhub_name_input: str
```

- *Type:* str

---

##### `eventhub_namespace_name_input`<sup>Optional</sup> <a name="eventhub_namespace_name_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput"></a>

```python
eventhub_namespace_name_input: str
```

- *Type:* str

---

##### `system_event_name_filter_input`<sup>Optional</sup> <a name="system_event_name_filter_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput"></a>

```python
system_event_name_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_event_name_filter_input`<sup>Optional</sup> <a name="user_event_name_filter_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput"></a>

```python
user_event_name_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

---

##### `eventhub_namespace_name`<sup>Required</sup> <a name="eventhub_namespace_name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName"></a>

```python
eventhub_namespace_name: str
```

- *Type:* str

---

##### `system_event_name_filter`<sup>Required</sup> <a name="system_event_name_filter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter"></a>

```python
system_event_name_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_event_name_filter`<sup>Required</sup> <a name="user_event_name_filter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter"></a>

```python
user_event_name_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubHubEventListener]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>]

---


### WebPubsubHubTimeoutsOutputReference <a name="WebPubsubHubTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_hub

webPubsubHub.WebPubsubHubTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubHubTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>]

---



