# `virtualHubRoutingIntent` Submodule <a name="`virtualHubRoutingIntent` Submodule" id="@cdktf/provider-azurerm.virtualHubRoutingIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubRoutingIntent <a name="VirtualHubRoutingIntent" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent azurerm_virtual_hub_routing_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntent(
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
  routing_policy: typing.Union[IResolvable, typing.List[VirtualHubRoutingIntentRoutingPolicy]],
  virtual_hub_id: str,
  id: str = None,
  timeouts: VirtualHubRoutingIntentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.routingPolicy">routing_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]</code> | routing_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#virtual_hub_id VirtualHubRoutingIntent#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#id VirtualHubRoutingIntent#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}.

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.routingPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#routing_policy VirtualHubRoutingIntent#routing_policy}

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.virtualHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#virtual_hub_id VirtualHubRoutingIntent#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#id VirtualHubRoutingIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#timeouts VirtualHubRoutingIntent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putRoutingPolicy">put_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing_policy` <a name="put_routing_policy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putRoutingPolicy"></a>

```python
def put_routing_policy(
  value: typing.Union[IResolvable, typing.List[VirtualHubRoutingIntentRoutingPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putRoutingPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#create VirtualHubRoutingIntent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#delete VirtualHubRoutingIntent#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#read VirtualHubRoutingIntent#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#update VirtualHubRoutingIntent#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualHubRoutingIntent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualHubRoutingIntent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualHubRoutingIntent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualHubRoutingIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubRoutingIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicy">routing_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList">VirtualHubRoutingIntentRoutingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference">VirtualHubRoutingIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicyInput">routing_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubIdInput">virtual_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicy"></a>

```python
routing_policy: VirtualHubRoutingIntentRoutingPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList">VirtualHubRoutingIntentRoutingPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeouts"></a>

```python
timeouts: VirtualHubRoutingIntentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference">VirtualHubRoutingIntentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `routing_policy_input`<sup>Optional</sup> <a name="routing_policy_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicyInput"></a>

```python
routing_policy_input: typing.Union[IResolvable, typing.List[VirtualHubRoutingIntentRoutingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualHubRoutingIntentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>]

---

##### `virtual_hub_id_input`<sup>Optional</sup> <a name="virtual_hub_id_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubIdInput"></a>

```python
virtual_hub_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubRoutingIntentConfig <a name="VirtualHubRoutingIntentConfig" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  routing_policy: typing.Union[IResolvable, typing.List[VirtualHubRoutingIntentRoutingPolicy]],
  virtual_hub_id: str,
  id: str = None,
  timeouts: VirtualHubRoutingIntentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.routingPolicy">routing_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]</code> | routing_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#virtual_hub_id VirtualHubRoutingIntent#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#id VirtualHubRoutingIntent#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}.

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.routingPolicy"></a>

```python
routing_policy: typing.Union[IResolvable, typing.List[VirtualHubRoutingIntentRoutingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#routing_policy VirtualHubRoutingIntent#routing_policy}

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#virtual_hub_id VirtualHubRoutingIntent#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#id VirtualHubRoutingIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.timeouts"></a>

```python
timeouts: VirtualHubRoutingIntentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#timeouts VirtualHubRoutingIntent#timeouts}

---

### VirtualHubRoutingIntentRoutingPolicy <a name="VirtualHubRoutingIntentRoutingPolicy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy(
  destinations: typing.List[str],
  name: str,
  next_hop: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#destinations VirtualHubRoutingIntent#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.nextHop">next_hop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#next_hop VirtualHubRoutingIntent#next_hop}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#destinations VirtualHubRoutingIntent#destinations}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}.

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.nextHop"></a>

```python
next_hop: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#next_hop VirtualHubRoutingIntent#next_hop}.

---

### VirtualHubRoutingIntentTimeouts <a name="VirtualHubRoutingIntentTimeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#create VirtualHubRoutingIntent#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#delete VirtualHubRoutingIntent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#read VirtualHubRoutingIntent#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#update VirtualHubRoutingIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#create VirtualHubRoutingIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#delete VirtualHubRoutingIntent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#read VirtualHubRoutingIntent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/virtual_hub_routing_intent#update VirtualHubRoutingIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubRoutingIntentRoutingPolicyList <a name="VirtualHubRoutingIntentRoutingPolicyList" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualHubRoutingIntentRoutingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualHubRoutingIntentRoutingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]]

---


### VirtualHubRoutingIntentRoutingPolicyOutputReference <a name="VirtualHubRoutingIntentRoutingPolicyOutputReference" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHopInput">next_hop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHop">next_hop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_hop_input`<sup>Optional</sup> <a name="next_hop_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHopInput"></a>

```python
next_hop_input: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHop"></a>

```python
next_hop: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualHubRoutingIntentRoutingPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>]

---


### VirtualHubRoutingIntentTimeoutsOutputReference <a name="VirtualHubRoutingIntentTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_routing_intent

virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualHubRoutingIntentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>]

---



