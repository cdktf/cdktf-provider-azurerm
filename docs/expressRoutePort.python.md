# `expressRoutePort` Submodule <a name="`expressRoutePort` Submodule" id="@cdktf/provider-azurerm.expressRoutePort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRoutePort <a name="ExpressRoutePort" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port azurerm_express_route_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePort(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth_in_gbps: typing.Union[int, float],
  encapsulation: str,
  location: str,
  name: str,
  peering_location: str,
  resource_group_name: str,
  billing_type: str = None,
  id: str = None,
  identity: ExpressRoutePortIdentity = None,
  link1: ExpressRoutePortLink1 = None,
  link2: ExpressRoutePortLink2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: ExpressRoutePortTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.bandwidthInGbps">bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.encapsulation">encapsulation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#location ExpressRoutePort#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#name ExpressRoutePort#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.peeringLocation">peering_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.billingType">billing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#id ExpressRoutePort#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | link1 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | link2 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth_in_gbps`<sup>Required</sup> <a name="bandwidth_in_gbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.bandwidthInGbps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}.

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.encapsulation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#location ExpressRoutePort#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#name ExpressRoutePort#name}.

---

##### `peering_location`<sup>Required</sup> <a name="peering_location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.peeringLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}.

---

##### `billing_type`<sup>Optional</sup> <a name="billing_type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.billingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#id ExpressRoutePort#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#identity ExpressRoutePort#identity}

---

##### `link1`<sup>Optional</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link1"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

link1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#link1 ExpressRoutePort#link1}

---

##### `link2`<sup>Optional</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

link2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#link2 ExpressRoutePort#link2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#timeouts ExpressRoutePort#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1">put_link1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2">put_link2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType">reset_billing_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1">reset_link1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2">reset_link2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#type ExpressRoutePort#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}.

---

##### `put_link1` <a name="put_link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1"></a>

```python
def put_link1(
  admin_enabled: typing.Union[bool, IResolvable] = None,
  macsec_cak_keyvault_secret_id: str = None,
  macsec_cipher: str = None,
  macsec_ckn_keyvault_secret_id: str = None,
  macsec_sci_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.adminEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

###### `macsec_cak_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.macsecCakKeyvaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

###### `macsec_cipher`<sup>Optional</sup> <a name="macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.macsecCipher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

###### `macsec_ckn_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.macsecCknKeyvaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

###### `macsec_sci_enabled`<sup>Optional</sup> <a name="macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.macsecSciEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

##### `put_link2` <a name="put_link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2"></a>

```python
def put_link2(
  admin_enabled: typing.Union[bool, IResolvable] = None,
  macsec_cak_keyvault_secret_id: str = None,
  macsec_cipher: str = None,
  macsec_ckn_keyvault_secret_id: str = None,
  macsec_sci_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.adminEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

###### `macsec_cak_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.macsecCakKeyvaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

###### `macsec_cipher`<sup>Optional</sup> <a name="macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.macsecCipher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

###### `macsec_ckn_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.macsecCknKeyvaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

###### `macsec_sci_enabled`<sup>Optional</sup> <a name="macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.macsecSciEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#create ExpressRoutePort#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#read ExpressRoutePort#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#update ExpressRoutePort#update}.

---

##### `reset_billing_type` <a name="reset_billing_type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType"></a>

```python
def reset_billing_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_link1` <a name="reset_link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1"></a>

```python
def reset_link1() -> None
```

##### `reset_link2` <a name="reset_link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2"></a>

```python
def reset_link2() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePort.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePort.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePort.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePort.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExpressRoutePort to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExpressRoutePort that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRoutePort to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype">ethertype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu">mtu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput">bandwidth_in_gbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput">billing_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput">encapsulation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input">link1_input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input">link2_input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput">peering_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps">bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType">billing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation">encapsulation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation">peering_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype"></a>

```python
ethertype: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity"></a>

```python
identity: ExpressRoutePortIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a>

---

##### `link1`<sup>Required</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1"></a>

```python
link1: ExpressRoutePortLink1OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a>

---

##### `link2`<sup>Required</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2"></a>

```python
link2: ExpressRoutePortLink2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu"></a>

```python
mtu: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts"></a>

```python
timeouts: ExpressRoutePortTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a>

---

##### `bandwidth_in_gbps_input`<sup>Optional</sup> <a name="bandwidth_in_gbps_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput"></a>

```python
bandwidth_in_gbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_type_input`<sup>Optional</sup> <a name="billing_type_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput"></a>

```python
billing_type_input: str
```

- *Type:* str

---

##### `encapsulation_input`<sup>Optional</sup> <a name="encapsulation_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput"></a>

```python
encapsulation_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput"></a>

```python
identity_input: ExpressRoutePortIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `link1_input`<sup>Optional</sup> <a name="link1_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input"></a>

```python
link1_input: ExpressRoutePortLink1
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `link2_input`<sup>Optional</sup> <a name="link2_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input"></a>

```python
link2_input: ExpressRoutePortLink2
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peering_location_input`<sup>Optional</sup> <a name="peering_location_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput"></a>

```python
peering_location_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExpressRoutePortTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>]

---

##### `bandwidth_in_gbps`<sup>Required</sup> <a name="bandwidth_in_gbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps"></a>

```python
bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_type`<sup>Required</sup> <a name="billing_type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType"></a>

```python
billing_type: str
```

- *Type:* str

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation"></a>

```python
encapsulation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peering_location`<sup>Required</sup> <a name="peering_location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation"></a>

```python
peering_location: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRoutePortConfig <a name="ExpressRoutePortConfig" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth_in_gbps: typing.Union[int, float],
  encapsulation: str,
  location: str,
  name: str,
  peering_location: str,
  resource_group_name: str,
  billing_type: str = None,
  id: str = None,
  identity: ExpressRoutePortIdentity = None,
  link1: ExpressRoutePortLink1 = None,
  link2: ExpressRoutePortLink2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: ExpressRoutePortTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps">bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation">encapsulation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#location ExpressRoutePort#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#name ExpressRoutePort#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation">peering_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType">billing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#id ExpressRoutePort#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | link1 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | link2 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth_in_gbps`<sup>Required</sup> <a name="bandwidth_in_gbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps"></a>

```python
bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}.

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation"></a>

```python
encapsulation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#location ExpressRoutePort#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#name ExpressRoutePort#name}.

---

##### `peering_location`<sup>Required</sup> <a name="peering_location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation"></a>

```python
peering_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}.

---

##### `billing_type`<sup>Optional</sup> <a name="billing_type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType"></a>

```python
billing_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#id ExpressRoutePort#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity"></a>

```python
identity: ExpressRoutePortIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#identity ExpressRoutePort#identity}

---

##### `link1`<sup>Optional</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1"></a>

```python
link1: ExpressRoutePortLink1
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

link1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#link1 ExpressRoutePort#link1}

---

##### `link2`<sup>Optional</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2"></a>

```python
link2: ExpressRoutePortLink2
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

link2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#link2 ExpressRoutePort#link2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts"></a>

```python
timeouts: ExpressRoutePortTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#timeouts ExpressRoutePort#timeouts}

---

### ExpressRoutePortIdentity <a name="ExpressRoutePortIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#type ExpressRoutePort#type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#type ExpressRoutePort#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}.

---

### ExpressRoutePortLink1 <a name="ExpressRoutePortLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortLink1(
  admin_enabled: typing.Union[bool, IResolvable] = None,
  macsec_cak_keyvault_secret_id: str = None,
  macsec_cipher: str = None,
  macsec_ckn_keyvault_secret_id: str = None,
  macsec_sci_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId">macsec_cak_keyvault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher">macsec_cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId">macsec_ckn_keyvault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled">macsec_sci_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `macsec_cak_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId"></a>

```python
macsec_cak_keyvault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `macsec_cipher`<sup>Optional</sup> <a name="macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher"></a>

```python
macsec_cipher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `macsec_ckn_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId"></a>

```python
macsec_ckn_keyvault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `macsec_sci_enabled`<sup>Optional</sup> <a name="macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled"></a>

```python
macsec_sci_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortLink2 <a name="ExpressRoutePortLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortLink2(
  admin_enabled: typing.Union[bool, IResolvable] = None,
  macsec_cak_keyvault_secret_id: str = None,
  macsec_cipher: str = None,
  macsec_ckn_keyvault_secret_id: str = None,
  macsec_sci_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId">macsec_cak_keyvault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher">macsec_cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId">macsec_ckn_keyvault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled">macsec_sci_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `macsec_cak_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId"></a>

```python
macsec_cak_keyvault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `macsec_cipher`<sup>Optional</sup> <a name="macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher"></a>

```python
macsec_cipher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `macsec_ckn_keyvault_secret_id`<sup>Optional</sup> <a name="macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId"></a>

```python
macsec_ckn_keyvault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `macsec_sci_enabled`<sup>Optional</sup> <a name="macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled"></a>

```python
macsec_sci_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortTimeouts <a name="ExpressRoutePortTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#create ExpressRoutePort#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#read ExpressRoutePort#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#update ExpressRoutePort#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#create ExpressRoutePort#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#read ExpressRoutePort#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/express_route_port#update ExpressRoutePort#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRoutePortIdentityOutputReference <a name="ExpressRoutePortIdentityOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ExpressRoutePortIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---


### ExpressRoutePortLink1OutputReference <a name="ExpressRoutePortLink1OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortLink1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled">reset_admin_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId">reset_macsec_cak_keyvault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher">reset_macsec_cipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId">reset_macsec_ckn_keyvault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled">reset_macsec_sci_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_enabled` <a name="reset_admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled"></a>

```python
def reset_admin_enabled() -> None
```

##### `reset_macsec_cak_keyvault_secret_id` <a name="reset_macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```python
def reset_macsec_cak_keyvault_secret_id() -> None
```

##### `reset_macsec_cipher` <a name="reset_macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher"></a>

```python
def reset_macsec_cipher() -> None
```

##### `reset_macsec_ckn_keyvault_secret_id` <a name="reset_macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```python
def reset_macsec_ckn_keyvault_secret_id() -> None
```

##### `reset_macsec_sci_enabled` <a name="reset_macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled"></a>

```python
def reset_macsec_sci_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId">patch_panel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId">rack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName">router_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput">admin_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput">macsec_cak_keyvault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput">macsec_cipher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput">macsec_ckn_keyvault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput">macsec_sci_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId">macsec_cak_keyvault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher">macsec_cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId">macsec_ckn_keyvault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled">macsec_sci_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `patch_panel_id`<sup>Required</sup> <a name="patch_panel_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId"></a>

```python
patch_panel_id: str
```

- *Type:* str

---

##### `rack_id`<sup>Required</sup> <a name="rack_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId"></a>

```python
rack_id: str
```

- *Type:* str

---

##### `router_name`<sup>Required</sup> <a name="router_name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName"></a>

```python
router_name: str
```

- *Type:* str

---

##### `admin_enabled_input`<sup>Optional</sup> <a name="admin_enabled_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput"></a>

```python
admin_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `macsec_cak_keyvault_secret_id_input`<sup>Optional</sup> <a name="macsec_cak_keyvault_secret_id_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```python
macsec_cak_keyvault_secret_id_input: str
```

- *Type:* str

---

##### `macsec_cipher_input`<sup>Optional</sup> <a name="macsec_cipher_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput"></a>

```python
macsec_cipher_input: str
```

- *Type:* str

---

##### `macsec_ckn_keyvault_secret_id_input`<sup>Optional</sup> <a name="macsec_ckn_keyvault_secret_id_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```python
macsec_ckn_keyvault_secret_id_input: str
```

- *Type:* str

---

##### `macsec_sci_enabled_input`<sup>Optional</sup> <a name="macsec_sci_enabled_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput"></a>

```python
macsec_sci_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_enabled`<sup>Required</sup> <a name="admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `macsec_cak_keyvault_secret_id`<sup>Required</sup> <a name="macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId"></a>

```python
macsec_cak_keyvault_secret_id: str
```

- *Type:* str

---

##### `macsec_cipher`<sup>Required</sup> <a name="macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher"></a>

```python
macsec_cipher: str
```

- *Type:* str

---

##### `macsec_ckn_keyvault_secret_id`<sup>Required</sup> <a name="macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId"></a>

```python
macsec_ckn_keyvault_secret_id: str
```

- *Type:* str

---

##### `macsec_sci_enabled`<sup>Required</sup> <a name="macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled"></a>

```python
macsec_sci_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue"></a>

```python
internal_value: ExpressRoutePortLink1
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---


### ExpressRoutePortLink2OutputReference <a name="ExpressRoutePortLink2OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortLink2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled">reset_admin_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId">reset_macsec_cak_keyvault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher">reset_macsec_cipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId">reset_macsec_ckn_keyvault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled">reset_macsec_sci_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_enabled` <a name="reset_admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled"></a>

```python
def reset_admin_enabled() -> None
```

##### `reset_macsec_cak_keyvault_secret_id` <a name="reset_macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```python
def reset_macsec_cak_keyvault_secret_id() -> None
```

##### `reset_macsec_cipher` <a name="reset_macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher"></a>

```python
def reset_macsec_cipher() -> None
```

##### `reset_macsec_ckn_keyvault_secret_id` <a name="reset_macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```python
def reset_macsec_ckn_keyvault_secret_id() -> None
```

##### `reset_macsec_sci_enabled` <a name="reset_macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled"></a>

```python
def reset_macsec_sci_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId">patch_panel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId">rack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName">router_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput">admin_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput">macsec_cak_keyvault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput">macsec_cipher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput">macsec_ckn_keyvault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput">macsec_sci_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId">macsec_cak_keyvault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher">macsec_cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId">macsec_ckn_keyvault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled">macsec_sci_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `patch_panel_id`<sup>Required</sup> <a name="patch_panel_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId"></a>

```python
patch_panel_id: str
```

- *Type:* str

---

##### `rack_id`<sup>Required</sup> <a name="rack_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId"></a>

```python
rack_id: str
```

- *Type:* str

---

##### `router_name`<sup>Required</sup> <a name="router_name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName"></a>

```python
router_name: str
```

- *Type:* str

---

##### `admin_enabled_input`<sup>Optional</sup> <a name="admin_enabled_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput"></a>

```python
admin_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `macsec_cak_keyvault_secret_id_input`<sup>Optional</sup> <a name="macsec_cak_keyvault_secret_id_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```python
macsec_cak_keyvault_secret_id_input: str
```

- *Type:* str

---

##### `macsec_cipher_input`<sup>Optional</sup> <a name="macsec_cipher_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput"></a>

```python
macsec_cipher_input: str
```

- *Type:* str

---

##### `macsec_ckn_keyvault_secret_id_input`<sup>Optional</sup> <a name="macsec_ckn_keyvault_secret_id_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```python
macsec_ckn_keyvault_secret_id_input: str
```

- *Type:* str

---

##### `macsec_sci_enabled_input`<sup>Optional</sup> <a name="macsec_sci_enabled_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput"></a>

```python
macsec_sci_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_enabled`<sup>Required</sup> <a name="admin_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `macsec_cak_keyvault_secret_id`<sup>Required</sup> <a name="macsec_cak_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId"></a>

```python
macsec_cak_keyvault_secret_id: str
```

- *Type:* str

---

##### `macsec_cipher`<sup>Required</sup> <a name="macsec_cipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher"></a>

```python
macsec_cipher: str
```

- *Type:* str

---

##### `macsec_ckn_keyvault_secret_id`<sup>Required</sup> <a name="macsec_ckn_keyvault_secret_id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId"></a>

```python
macsec_ckn_keyvault_secret_id: str
```

- *Type:* str

---

##### `macsec_sci_enabled`<sup>Required</sup> <a name="macsec_sci_enabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled"></a>

```python
macsec_sci_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue"></a>

```python
internal_value: ExpressRoutePortLink2
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---


### ExpressRoutePortTimeoutsOutputReference <a name="ExpressRoutePortTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port

expressRoutePort.ExpressRoutePortTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExpressRoutePortTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>]

---



