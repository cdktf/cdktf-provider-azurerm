# `expressRouteGateway` Submodule <a name="`expressRouteGateway` Submodule" id="@cdktf/provider-azurerm.expressRouteGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteGateway <a name="ExpressRouteGateway" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway azurerm_express_route_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGateway(
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
  resource_group_name: str,
  scale_units: typing.Union[int, float],
  virtual_hub_id: str,
  allow_non_virtual_wan_traffic: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ExpressRouteGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#location ExpressRouteGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#name ExpressRouteGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#resource_group_name ExpressRouteGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.scaleUnits">scale_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#scale_units ExpressRouteGateway#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#virtual_hub_id ExpressRouteGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.allowNonVirtualWanTraffic">allow_non_virtual_wan_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#allow_non_virtual_wan_traffic ExpressRouteGateway#allow_non_virtual_wan_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#id ExpressRouteGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#tags ExpressRouteGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#location ExpressRouteGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#name ExpressRouteGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#resource_group_name ExpressRouteGateway#resource_group_name}.

---

##### `scale_units`<sup>Required</sup> <a name="scale_units" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.scaleUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#scale_units ExpressRouteGateway#scale_units}.

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.virtualHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#virtual_hub_id ExpressRouteGateway#virtual_hub_id}.

---

##### `allow_non_virtual_wan_traffic`<sup>Optional</sup> <a name="allow_non_virtual_wan_traffic" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.allowNonVirtualWanTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#allow_non_virtual_wan_traffic ExpressRouteGateway#allow_non_virtual_wan_traffic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#id ExpressRouteGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#tags ExpressRouteGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#timeouts ExpressRouteGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetAllowNonVirtualWanTraffic">reset_allow_non_virtual_wan_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#create ExpressRouteGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#delete ExpressRouteGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#read ExpressRouteGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#update ExpressRouteGateway#update}.

---

##### `reset_allow_non_virtual_wan_traffic` <a name="reset_allow_non_virtual_wan_traffic" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetAllowNonVirtualWanTraffic"></a>

```python
def reset_allow_non_virtual_wan_traffic() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExpressRouteGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExpressRouteGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExpressRouteGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExpressRouteGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference">ExpressRouteGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTrafficInput">allow_non_virtual_wan_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnitsInput">scale_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubIdInput">virtual_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTraffic">allow_non_virtual_wan_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnits">scale_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeouts"></a>

```python
timeouts: ExpressRouteGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference">ExpressRouteGatewayTimeoutsOutputReference</a>

---

##### `allow_non_virtual_wan_traffic_input`<sup>Optional</sup> <a name="allow_non_virtual_wan_traffic_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTrafficInput"></a>

```python
allow_non_virtual_wan_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scale_units_input`<sup>Optional</sup> <a name="scale_units_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnitsInput"></a>

```python
scale_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExpressRouteGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>]

---

##### `virtual_hub_id_input`<sup>Optional</sup> <a name="virtual_hub_id_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubIdInput"></a>

```python
virtual_hub_id_input: str
```

- *Type:* str

---

##### `allow_non_virtual_wan_traffic`<sup>Required</sup> <a name="allow_non_virtual_wan_traffic" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTraffic"></a>

```python
allow_non_virtual_wan_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `scale_units`<sup>Required</sup> <a name="scale_units" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnits"></a>

```python
scale_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteGatewayConfig <a name="ExpressRouteGatewayConfig" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  scale_units: typing.Union[int, float],
  virtual_hub_id: str,
  allow_non_virtual_wan_traffic: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ExpressRouteGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#location ExpressRouteGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#name ExpressRouteGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#resource_group_name ExpressRouteGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.scaleUnits">scale_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#scale_units ExpressRouteGateway#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#virtual_hub_id ExpressRouteGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.allowNonVirtualWanTraffic">allow_non_virtual_wan_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#allow_non_virtual_wan_traffic ExpressRouteGateway#allow_non_virtual_wan_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#id ExpressRouteGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#tags ExpressRouteGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#location ExpressRouteGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#name ExpressRouteGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#resource_group_name ExpressRouteGateway#resource_group_name}.

---

##### `scale_units`<sup>Required</sup> <a name="scale_units" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.scaleUnits"></a>

```python
scale_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#scale_units ExpressRouteGateway#scale_units}.

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#virtual_hub_id ExpressRouteGateway#virtual_hub_id}.

---

##### `allow_non_virtual_wan_traffic`<sup>Optional</sup> <a name="allow_non_virtual_wan_traffic" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.allowNonVirtualWanTraffic"></a>

```python
allow_non_virtual_wan_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#allow_non_virtual_wan_traffic ExpressRouteGateway#allow_non_virtual_wan_traffic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#id ExpressRouteGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#tags ExpressRouteGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.timeouts"></a>

```python
timeouts: ExpressRouteGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#timeouts ExpressRouteGateway#timeouts}

---

### ExpressRouteGatewayTimeouts <a name="ExpressRouteGatewayTimeouts" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#create ExpressRouteGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#delete ExpressRouteGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#read ExpressRouteGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#update ExpressRouteGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#create ExpressRouteGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#delete ExpressRouteGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#read ExpressRouteGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/express_route_gateway#update ExpressRouteGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteGatewayTimeoutsOutputReference <a name="ExpressRouteGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_gateway

expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExpressRouteGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>]

---



