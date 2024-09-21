# `voiceServicesCommunicationsGatewayTestLine` Submodule <a name="`voiceServicesCommunicationsGatewayTestLine` Submodule" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VoiceServicesCommunicationsGatewayTestLine <a name="VoiceServicesCommunicationsGatewayTestLine" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line azurerm_voice_services_communications_gateway_test_line}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine(
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
  phone_number: str,
  purpose: str,
  voice_services_communications_gateway_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VoiceServicesCommunicationsGatewayTestLineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.voiceServicesCommunicationsGatewayId">voice_services_communications_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}.

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.purpose"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}.

---

##### `voice_services_communications_gateway_id`<sup>Required</sup> <a name="voice_services_communications_gateway_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.voiceServicesCommunicationsGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#timeouts VoiceServicesCommunicationsGatewayTestLine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#create VoiceServicesCommunicationsGatewayTestLine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#delete VoiceServicesCommunicationsGatewayTestLine#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#read VoiceServicesCommunicationsGatewayTestLine#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#update VoiceServicesCommunicationsGatewayTestLine#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VoiceServicesCommunicationsGatewayTestLine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VoiceServicesCommunicationsGatewayTestLine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VoiceServicesCommunicationsGatewayTestLine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VoiceServicesCommunicationsGatewayTestLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VoiceServicesCommunicationsGatewayTestLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayIdInput">voice_services_communications_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayId">voice_services_communications_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeouts"></a>

```python
timeouts: VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VoiceServicesCommunicationsGatewayTestLineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>]

---

##### `voice_services_communications_gateway_id_input`<sup>Optional</sup> <a name="voice_services_communications_gateway_id_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayIdInput"></a>

```python
voice_services_communications_gateway_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `voice_services_communications_gateway_id`<sup>Required</sup> <a name="voice_services_communications_gateway_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayId"></a>

```python
voice_services_communications_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VoiceServicesCommunicationsGatewayTestLineConfig <a name="VoiceServicesCommunicationsGatewayTestLineConfig" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  phone_number: str,
  purpose: str,
  voice_services_communications_gateway_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VoiceServicesCommunicationsGatewayTestLineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.voiceServicesCommunicationsGatewayId">voice_services_communications_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}.

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}.

---

##### `voice_services_communications_gateway_id`<sup>Required</sup> <a name="voice_services_communications_gateway_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.voiceServicesCommunicationsGatewayId"></a>

```python
voice_services_communications_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.timeouts"></a>

```python
timeouts: VoiceServicesCommunicationsGatewayTestLineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#timeouts VoiceServicesCommunicationsGatewayTestLine#timeouts}

---

### VoiceServicesCommunicationsGatewayTestLineTimeouts <a name="VoiceServicesCommunicationsGatewayTestLineTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#create VoiceServicesCommunicationsGatewayTestLine#create}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#delete VoiceServicesCommunicationsGatewayTestLine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#read VoiceServicesCommunicationsGatewayTestLine#read}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#update VoiceServicesCommunicationsGatewayTestLine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#create VoiceServicesCommunicationsGatewayTestLine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#delete VoiceServicesCommunicationsGatewayTestLine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#read VoiceServicesCommunicationsGatewayTestLine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/voice_services_communications_gateway_test_line#update VoiceServicesCommunicationsGatewayTestLine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference <a name="VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway_test_line

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VoiceServicesCommunicationsGatewayTestLineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>]

---



