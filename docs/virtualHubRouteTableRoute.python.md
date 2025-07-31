# `virtualHubRouteTableRoute` Submodule <a name="`virtualHubRouteTableRoute` Submodule" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubRouteTableRouteA <a name="VirtualHubRouteTableRouteA" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route azurerm_virtual_hub_route_table_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destinations: typing.List[str],
  destinations_type: str,
  name: str,
  next_hop: str,
  route_table_id: str,
  id: str = None,
  next_hop_type: str = None,
  timeouts: VirtualHubRouteTableRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinations">destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinationsType">destinations_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHop">next_hop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHopType">next_hop_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}.

---

##### `destinations_type`<sup>Required</sup> <a name="destinations_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinationsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}.

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHop"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}.

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.routeTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_hop_type`<sup>Optional</sup> <a name="next_hop_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHopType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#timeouts VirtualHubRouteTableRouteA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetNextHopType">reset_next_hop_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#create VirtualHubRouteTableRouteA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#delete VirtualHubRouteTableRouteA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#read VirtualHubRouteTableRouteA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#update VirtualHubRouteTableRouteA#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_next_hop_type` <a name="reset_next_hop_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetNextHopType"></a>

```python
def reset_next_hop_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualHubRouteTableRouteA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualHubRouteTableRouteA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualHubRouteTableRouteA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualHubRouteTableRouteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubRouteTableRouteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference">VirtualHubRouteTableRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsTypeInput">destinations_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopInput">next_hop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopTypeInput">next_hop_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsType">destinations_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHop">next_hop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopType">next_hop_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeouts"></a>

```python
timeouts: VirtualHubRouteTableRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference">VirtualHubRouteTableRouteTimeoutsOutputReference</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destinations_type_input`<sup>Optional</sup> <a name="destinations_type_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsTypeInput"></a>

```python
destinations_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_hop_input`<sup>Optional</sup> <a name="next_hop_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopInput"></a>

```python
next_hop_input: str
```

- *Type:* str

---

##### `next_hop_type_input`<sup>Optional</sup> <a name="next_hop_type_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopTypeInput"></a>

```python
next_hop_type_input: str
```

- *Type:* str

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualHubRouteTableRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destinations_type`<sup>Required</sup> <a name="destinations_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsType"></a>

```python
destinations_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHop"></a>

```python
next_hop: str
```

- *Type:* str

---

##### `next_hop_type`<sup>Required</sup> <a name="next_hop_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopType"></a>

```python
next_hop_type: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubRouteTableRouteAConfig <a name="VirtualHubRouteTableRouteAConfig" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destinations: typing.List[str],
  destinations_type: str,
  name: str,
  next_hop: str,
  route_table_id: str,
  id: str = None,
  next_hop_type: str = None,
  timeouts: VirtualHubRouteTableRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinationsType">destinations_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHop">next_hop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHopType">next_hop_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}.

---

##### `destinations_type`<sup>Required</sup> <a name="destinations_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinationsType"></a>

```python
destinations_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}.

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHop"></a>

```python
next_hop: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}.

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_hop_type`<sup>Optional</sup> <a name="next_hop_type" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHopType"></a>

```python
next_hop_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.timeouts"></a>

```python
timeouts: VirtualHubRouteTableRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#timeouts VirtualHubRouteTableRouteA#timeouts}

---

### VirtualHubRouteTableRouteTimeouts <a name="VirtualHubRouteTableRouteTimeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#create VirtualHubRouteTableRouteA#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#delete VirtualHubRouteTableRouteA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#read VirtualHubRouteTableRouteA#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#update VirtualHubRouteTableRouteA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#create VirtualHubRouteTableRouteA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#delete VirtualHubRouteTableRouteA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#read VirtualHubRouteTableRouteA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/virtual_hub_route_table_route#update VirtualHubRouteTableRouteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubRouteTableRouteTimeoutsOutputReference <a name="VirtualHubRouteTableRouteTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_route_table_route

virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualHubRouteTableRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>]

---



