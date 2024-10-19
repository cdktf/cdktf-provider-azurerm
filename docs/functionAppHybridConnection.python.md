# `functionAppHybridConnection` Submodule <a name="`functionAppHybridConnection` Submodule" id="@cdktf/provider-azurerm.functionAppHybridConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppHybridConnection <a name="FunctionAppHybridConnection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection azurerm_function_app_hybrid_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_app_id: str,
  hostname: str,
  port: typing.Union[int, float],
  relay_id: str,
  id: str = None,
  send_key_name: str = None,
  timeouts: FunctionAppHybridConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.functionAppId">function_app_id</a></code> | <code>str</code> | The ID of the Function App for this Hybrid Connection. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | The hostname of the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to use for the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.relayId">relay_id</a></code> | <code>str</code> | The ID of the Relay Hybrid Connection to use. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.sendKeyName">send_key_name</a></code> | <code>str</code> | The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_app_id`<sup>Required</sup> <a name="function_app_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.functionAppId"></a>

- *Type:* str

The ID of the Function App for this Hybrid Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#function_app_id FunctionAppHybridConnection#function_app_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.hostname"></a>

- *Type:* str

The hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#hostname FunctionAppHybridConnection#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#port FunctionAppHybridConnection#port}

---

##### `relay_id`<sup>Required</sup> <a name="relay_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.relayId"></a>

- *Type:* str

The ID of the Relay Hybrid Connection to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#relay_id FunctionAppHybridConnection#relay_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_key_name`<sup>Optional</sup> <a name="send_key_name" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.sendKeyName"></a>

- *Type:* str

The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#send_key_name FunctionAppHybridConnection#send_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#timeouts FunctionAppHybridConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetSendKeyName">reset_send_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#create FunctionAppHybridConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#delete FunctionAppHybridConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#read FunctionAppHybridConnection#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#update FunctionAppHybridConnection#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_send_key_name` <a name="reset_send_key_name" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetSendKeyName"></a>

```python
def reset_send_key_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FunctionAppHybridConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FunctionAppHybridConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FunctionAppHybridConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FunctionAppHybridConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionAppHybridConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayName">relay_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyValue">send_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusNamespace">service_bus_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusSuffix">service_bus_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference">FunctionAppHybridConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppIdInput">function_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayIdInput">relay_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyNameInput">send_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppId">function_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayId">relay_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyName">send_key_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `relay_name`<sup>Required</sup> <a name="relay_name" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayName"></a>

```python
relay_name: str
```

- *Type:* str

---

##### `send_key_value`<sup>Required</sup> <a name="send_key_value" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyValue"></a>

```python
send_key_value: str
```

- *Type:* str

---

##### `service_bus_namespace`<sup>Required</sup> <a name="service_bus_namespace" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusNamespace"></a>

```python
service_bus_namespace: str
```

- *Type:* str

---

##### `service_bus_suffix`<sup>Required</sup> <a name="service_bus_suffix" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusSuffix"></a>

```python
service_bus_suffix: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeouts"></a>

```python
timeouts: FunctionAppHybridConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference">FunctionAppHybridConnectionTimeoutsOutputReference</a>

---

##### `function_app_id_input`<sup>Optional</sup> <a name="function_app_id_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppIdInput"></a>

```python
function_app_id_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `relay_id_input`<sup>Optional</sup> <a name="relay_id_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayIdInput"></a>

```python
relay_id_input: str
```

- *Type:* str

---

##### `send_key_name_input`<sup>Optional</sup> <a name="send_key_name_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyNameInput"></a>

```python
send_key_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FunctionAppHybridConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>]

---

##### `function_app_id`<sup>Required</sup> <a name="function_app_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppId"></a>

```python
function_app_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `relay_id`<sup>Required</sup> <a name="relay_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayId"></a>

```python
relay_id: str
```

- *Type:* str

---

##### `send_key_name`<sup>Required</sup> <a name="send_key_name" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyName"></a>

```python
send_key_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppHybridConnectionConfig <a name="FunctionAppHybridConnectionConfig" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_app_id: str,
  hostname: str,
  port: typing.Union[int, float],
  relay_id: str,
  id: str = None,
  send_key_name: str = None,
  timeouts: FunctionAppHybridConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.functionAppId">function_app_id</a></code> | <code>str</code> | The ID of the Function App for this Hybrid Connection. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.hostname">hostname</a></code> | <code>str</code> | The hostname of the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to use for the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.relayId">relay_id</a></code> | <code>str</code> | The ID of the Relay Hybrid Connection to use. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.sendKeyName">send_key_name</a></code> | <code>str</code> | The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_app_id`<sup>Required</sup> <a name="function_app_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.functionAppId"></a>

```python
function_app_id: str
```

- *Type:* str

The ID of the Function App for this Hybrid Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#function_app_id FunctionAppHybridConnection#function_app_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#hostname FunctionAppHybridConnection#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#port FunctionAppHybridConnection#port}

---

##### `relay_id`<sup>Required</sup> <a name="relay_id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.relayId"></a>

```python
relay_id: str
```

- *Type:* str

The ID of the Relay Hybrid Connection to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#relay_id FunctionAppHybridConnection#relay_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_key_name`<sup>Optional</sup> <a name="send_key_name" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.sendKeyName"></a>

```python
send_key_name: str
```

- *Type:* str

The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#send_key_name FunctionAppHybridConnection#send_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.timeouts"></a>

```python
timeouts: FunctionAppHybridConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#timeouts FunctionAppHybridConnection#timeouts}

---

### FunctionAppHybridConnectionTimeouts <a name="FunctionAppHybridConnectionTimeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#create FunctionAppHybridConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#delete FunctionAppHybridConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#read FunctionAppHybridConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#update FunctionAppHybridConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#create FunctionAppHybridConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#delete FunctionAppHybridConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#read FunctionAppHybridConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/function_app_hybrid_connection#update FunctionAppHybridConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppHybridConnectionTimeoutsOutputReference <a name="FunctionAppHybridConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_hybrid_connection

functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppHybridConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>]

---



