# `signalrServiceNetworkAcl` Submodule <a name="`signalrServiceNetworkAcl` Submodule" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrServiceNetworkAcl <a name="SignalrServiceNetworkAcl" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl azurerm_signalr_service_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAcl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: str,
  public_network: SignalrServiceNetworkAclPublicNetwork,
  signalr_service_id: str,
  id: str = None,
  private_endpoint: typing.Union[IResolvable, typing.List[SignalrServiceNetworkAclPrivateEndpoint]] = None,
  timeouts: SignalrServiceNetworkAclTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#default_action SignalrServiceNetworkAcl#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.publicNetwork">public_network</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a></code> | public_network block. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.signalrServiceId">signalr_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.privateEndpoint">private_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]</code> | private_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#default_action SignalrServiceNetworkAcl#default_action}.

---

##### `public_network`<sup>Required</sup> <a name="public_network" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.publicNetwork"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

public_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#public_network SignalrServiceNetworkAcl#public_network}

---

##### `signalr_service_id`<sup>Required</sup> <a name="signalr_service_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.signalrServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint`<sup>Optional</sup> <a name="private_endpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.privateEndpoint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#private_endpoint SignalrServiceNetworkAcl#private_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#timeouts SignalrServiceNetworkAcl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPrivateEndpoint">put_private_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPublicNetwork">put_public_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetPrivateEndpoint">reset_private_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_private_endpoint` <a name="put_private_endpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPrivateEndpoint"></a>

```python
def put_private_endpoint(
  value: typing.Union[IResolvable, typing.List[SignalrServiceNetworkAclPrivateEndpoint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPrivateEndpoint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]

---

##### `put_public_network` <a name="put_public_network" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPublicNetwork"></a>

```python
def put_public_network(
  allowed_request_types: typing.List[str] = None,
  denied_request_types: typing.List[str] = None
) -> None
```

###### `allowed_request_types`<sup>Optional</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPublicNetwork.parameter.allowedRequestTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}.

---

###### `denied_request_types`<sup>Optional</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPublicNetwork.parameter.deniedRequestTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#create SignalrServiceNetworkAcl#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#delete SignalrServiceNetworkAcl#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#read SignalrServiceNetworkAcl#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#update SignalrServiceNetworkAcl#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_endpoint` <a name="reset_private_endpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetPrivateEndpoint"></a>

```python
def reset_private_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SignalrServiceNetworkAcl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SignalrServiceNetworkAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SignalrServiceNetworkAcl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SignalrServiceNetworkAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SignalrServiceNetworkAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpoint">private_endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList">SignalrServiceNetworkAclPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetwork">public_network</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference">SignalrServiceNetworkAclPublicNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference">SignalrServiceNetworkAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpointInput">private_endpoint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetworkInput">public_network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceIdInput">signalr_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceId">signalr_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpoint"></a>

```python
private_endpoint: SignalrServiceNetworkAclPrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList">SignalrServiceNetworkAclPrivateEndpointList</a>

---

##### `public_network`<sup>Required</sup> <a name="public_network" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetwork"></a>

```python
public_network: SignalrServiceNetworkAclPublicNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference">SignalrServiceNetworkAclPublicNetworkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeouts"></a>

```python
timeouts: SignalrServiceNetworkAclTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference">SignalrServiceNetworkAclTimeoutsOutputReference</a>

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_endpoint_input`<sup>Optional</sup> <a name="private_endpoint_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpointInput"></a>

```python
private_endpoint_input: typing.Union[IResolvable, typing.List[SignalrServiceNetworkAclPrivateEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]

---

##### `public_network_input`<sup>Optional</sup> <a name="public_network_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetworkInput"></a>

```python
public_network_input: SignalrServiceNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

---

##### `signalr_service_id_input`<sup>Optional</sup> <a name="signalr_service_id_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceIdInput"></a>

```python
signalr_service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SignalrServiceNetworkAclTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `signalr_service_id`<sup>Required</sup> <a name="signalr_service_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceId"></a>

```python
signalr_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceNetworkAclConfig <a name="SignalrServiceNetworkAclConfig" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: str,
  public_network: SignalrServiceNetworkAclPublicNetwork,
  signalr_service_id: str,
  id: str = None,
  private_endpoint: typing.Union[IResolvable, typing.List[SignalrServiceNetworkAclPrivateEndpoint]] = None,
  timeouts: SignalrServiceNetworkAclTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#default_action SignalrServiceNetworkAcl#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.publicNetwork">public_network</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a></code> | public_network block. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.signalrServiceId">signalr_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.privateEndpoint">private_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]</code> | private_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#default_action SignalrServiceNetworkAcl#default_action}.

---

##### `public_network`<sup>Required</sup> <a name="public_network" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.publicNetwork"></a>

```python
public_network: SignalrServiceNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

public_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#public_network SignalrServiceNetworkAcl#public_network}

---

##### `signalr_service_id`<sup>Required</sup> <a name="signalr_service_id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.signalrServiceId"></a>

```python
signalr_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint`<sup>Optional</sup> <a name="private_endpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.privateEndpoint"></a>

```python
private_endpoint: typing.Union[IResolvable, typing.List[SignalrServiceNetworkAclPrivateEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#private_endpoint SignalrServiceNetworkAcl#private_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.timeouts"></a>

```python
timeouts: SignalrServiceNetworkAclTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#timeouts SignalrServiceNetworkAcl#timeouts}

---

### SignalrServiceNetworkAclPrivateEndpoint <a name="SignalrServiceNetworkAclPrivateEndpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint(
  id: str,
  allowed_request_types: typing.List[str] = None,
  denied_request_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `allowed_request_types`<sup>Optional</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}.

---

##### `denied_request_types`<sup>Optional</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}.

---

### SignalrServiceNetworkAclPublicNetwork <a name="SignalrServiceNetworkAclPublicNetwork" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork(
  allowed_request_types: typing.List[str] = None,
  denied_request_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}. |

---

##### `allowed_request_types`<sup>Optional</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}.

---

##### `denied_request_types`<sup>Optional</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}.

---

### SignalrServiceNetworkAclTimeouts <a name="SignalrServiceNetworkAclTimeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#create SignalrServiceNetworkAcl#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#delete SignalrServiceNetworkAcl#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#read SignalrServiceNetworkAcl#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#update SignalrServiceNetworkAcl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#create SignalrServiceNetworkAcl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#delete SignalrServiceNetworkAcl#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#read SignalrServiceNetworkAcl#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/signalr_service_network_acl#update SignalrServiceNetworkAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceNetworkAclPrivateEndpointList <a name="SignalrServiceNetworkAclPrivateEndpointList" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignalrServiceNetworkAclPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SignalrServiceNetworkAclPrivateEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]]

---


### SignalrServiceNetworkAclPrivateEndpointOutputReference <a name="SignalrServiceNetworkAclPrivateEndpointOutputReference" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes">reset_allowed_request_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes">reset_denied_request_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_request_types` <a name="reset_allowed_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes"></a>

```python
def reset_allowed_request_types() -> None
```

##### `reset_denied_request_types` <a name="reset_denied_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes"></a>

```python
def reset_denied_request_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput">allowed_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput">denied_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_request_types_input`<sup>Optional</sup> <a name="allowed_request_types_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput"></a>

```python
allowed_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types_input`<sup>Optional</sup> <a name="denied_request_types_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput"></a>

```python
denied_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `allowed_request_types`<sup>Required</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types`<sup>Required</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SignalrServiceNetworkAclPrivateEndpoint]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint">SignalrServiceNetworkAclPrivateEndpoint</a>]

---


### SignalrServiceNetworkAclPublicNetworkOutputReference <a name="SignalrServiceNetworkAclPublicNetworkOutputReference" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes">reset_allowed_request_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes">reset_denied_request_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_request_types` <a name="reset_allowed_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes"></a>

```python
def reset_allowed_request_types() -> None
```

##### `reset_denied_request_types` <a name="reset_denied_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes"></a>

```python
def reset_denied_request_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput">allowed_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput">denied_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_request_types_input`<sup>Optional</sup> <a name="allowed_request_types_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput"></a>

```python
allowed_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types_input`<sup>Optional</sup> <a name="denied_request_types_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput"></a>

```python
denied_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_request_types`<sup>Required</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types`<sup>Required</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.internalValue"></a>

```python
internal_value: SignalrServiceNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

---


### SignalrServiceNetworkAclTimeoutsOutputReference <a name="SignalrServiceNetworkAclTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_network_acl

signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SignalrServiceNetworkAclTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>]

---



