# `vpnGateway` Submodule <a name="`vpnGateway` Submodule" id="@cdktf/provider-azurerm.vpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGateway <a name="VpnGateway" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway azurerm_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGateway(
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
  virtual_hub_id: str,
  bgp_route_translation_for_nat_enabled: typing.Union[bool, IResolvable] = None,
  bgp_settings: VpnGatewayBgpSettings = None,
  id: str = None,
  routing_preference: str = None,
  scale_unit: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpnGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#location VpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#name VpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.bgpRouteTranslationForNatEnabled">bgp_route_translation_for_nat_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#id VpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.routingPreference">routing_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scaleUnit">scale_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#tags VpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#location VpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#name VpnGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}.

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.virtualHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}.

---

##### `bgp_route_translation_for_nat_enabled`<sup>Optional</sup> <a name="bgp_route_translation_for_nat_enabled" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.bgpRouteTranslationForNatEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}.

---

##### `bgp_settings`<sup>Optional</sup> <a name="bgp_settings" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.bgpSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#bgp_settings VpnGateway#bgp_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#id VpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routing_preference`<sup>Optional</sup> <a name="routing_preference" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.routingPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}.

---

##### `scale_unit`<sup>Optional</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scaleUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#tags VpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#timeouts VpnGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings">put_bgp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpRouteTranslationForNatEnabled">reset_bgp_route_translation_for_nat_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpSettings">reset_bgp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetRoutingPreference">reset_routing_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetScaleUnit">reset_scale_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp_settings` <a name="put_bgp_settings" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings"></a>

```python
def put_bgp_settings(
  asn: typing.Union[int, float],
  peer_weight: typing.Union[int, float],
  instance0_bgp_peering_address: VpnGatewayBgpSettingsInstance0BgpPeeringAddress = None,
  instance1_bgp_peering_address: VpnGatewayBgpSettingsInstance1BgpPeeringAddress = None
) -> None
```

###### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#asn VpnGateway#asn}.

---

###### `peer_weight`<sup>Required</sup> <a name="peer_weight" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings.parameter.peerWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}.

---

###### `instance0_bgp_peering_address`<sup>Optional</sup> <a name="instance0_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings.parameter.instance0BgpPeeringAddress"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

instance_0_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#instance_0_bgp_peering_address VpnGateway#instance_0_bgp_peering_address}

---

###### `instance1_bgp_peering_address`<sup>Optional</sup> <a name="instance1_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings.parameter.instance1BgpPeeringAddress"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

instance_1_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#instance_1_bgp_peering_address VpnGateway#instance_1_bgp_peering_address}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#create VpnGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#delete VpnGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#read VpnGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#update VpnGateway#update}.

---

##### `reset_bgp_route_translation_for_nat_enabled` <a name="reset_bgp_route_translation_for_nat_enabled" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpRouteTranslationForNatEnabled"></a>

```python
def reset_bgp_route_translation_for_nat_enabled() -> None
```

##### `reset_bgp_settings` <a name="reset_bgp_settings" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpSettings"></a>

```python
def reset_bgp_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_routing_preference` <a name="reset_routing_preference" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetRoutingPreference"></a>

```python
def reset_routing_preference() -> None
```

##### `reset_scale_unit` <a name="reset_scale_unit" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetScaleUnit"></a>

```python
def reset_scale_unit() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpnGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpnGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpnGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference">VpnGatewayBgpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference">VpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabledInput">bgp_route_translation_for_nat_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettingsInput">bgp_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreferenceInput">routing_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnitInput">scale_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubIdInput">virtual_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabled">bgp_route_translation_for_nat_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreference">routing_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnit">scale_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bgp_settings`<sup>Required</sup> <a name="bgp_settings" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettings"></a>

```python
bgp_settings: VpnGatewayBgpSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference">VpnGatewayBgpSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeouts"></a>

```python
timeouts: VpnGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference">VpnGatewayTimeoutsOutputReference</a>

---

##### `bgp_route_translation_for_nat_enabled_input`<sup>Optional</sup> <a name="bgp_route_translation_for_nat_enabled_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabledInput"></a>

```python
bgp_route_translation_for_nat_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bgp_settings_input`<sup>Optional</sup> <a name="bgp_settings_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettingsInput"></a>

```python
bgp_settings_input: VpnGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `routing_preference_input`<sup>Optional</sup> <a name="routing_preference_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreferenceInput"></a>

```python
routing_preference_input: str
```

- *Type:* str

---

##### `scale_unit_input`<sup>Optional</sup> <a name="scale_unit_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnitInput"></a>

```python
scale_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpnGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>]

---

##### `virtual_hub_id_input`<sup>Optional</sup> <a name="virtual_hub_id_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubIdInput"></a>

```python
virtual_hub_id_input: str
```

- *Type:* str

---

##### `bgp_route_translation_for_nat_enabled`<sup>Required</sup> <a name="bgp_route_translation_for_nat_enabled" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabled"></a>

```python
bgp_route_translation_for_nat_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `routing_preference`<sup>Required</sup> <a name="routing_preference" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreference"></a>

```python
routing_preference: str
```

- *Type:* str

---

##### `scale_unit`<sup>Required</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnit"></a>

```python
scale_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayBgpSettings <a name="VpnGatewayBgpSettings" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayBgpSettings(
  asn: typing.Union[int, float],
  peer_weight: typing.Union[int, float],
  instance0_bgp_peering_address: VpnGatewayBgpSettingsInstance0BgpPeeringAddress = None,
  instance1_bgp_peering_address: VpnGatewayBgpSettingsInstance1BgpPeeringAddress = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#asn VpnGateway#asn}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance0BgpPeeringAddress">instance0_bgp_peering_address</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | instance_0_bgp_peering_address block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance1BgpPeeringAddress">instance1_bgp_peering_address</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | instance_1_bgp_peering_address block. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#asn VpnGateway#asn}.

---

##### `peer_weight`<sup>Required</sup> <a name="peer_weight" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}.

---

##### `instance0_bgp_peering_address`<sup>Optional</sup> <a name="instance0_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance0BgpPeeringAddress"></a>

```python
instance0_bgp_peering_address: VpnGatewayBgpSettingsInstance0BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

instance_0_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#instance_0_bgp_peering_address VpnGateway#instance_0_bgp_peering_address}

---

##### `instance1_bgp_peering_address`<sup>Optional</sup> <a name="instance1_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance1BgpPeeringAddress"></a>

```python
instance1_bgp_peering_address: VpnGatewayBgpSettingsInstance1BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

instance_1_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#instance_1_bgp_peering_address VpnGateway#instance_1_bgp_peering_address}

---

### VpnGatewayBgpSettingsInstance0BgpPeeringAddress <a name="VpnGatewayBgpSettingsInstance0BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress(
  custom_ips: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.property.customIps">custom_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}. |

---

##### `custom_ips`<sup>Required</sup> <a name="custom_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.property.customIps"></a>

```python
custom_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

### VpnGatewayBgpSettingsInstance1BgpPeeringAddress <a name="VpnGatewayBgpSettingsInstance1BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress(
  custom_ips: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.property.customIps">custom_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}. |

---

##### `custom_ips`<sup>Required</sup> <a name="custom_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.property.customIps"></a>

```python
custom_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

### VpnGatewayConfig <a name="VpnGatewayConfig" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayConfig(
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
  virtual_hub_id: str,
  bgp_route_translation_for_nat_enabled: typing.Union[bool, IResolvable] = None,
  bgp_settings: VpnGatewayBgpSettings = None,
  id: str = None,
  routing_preference: str = None,
  scale_unit: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpnGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#location VpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#name VpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpRouteTranslationForNatEnabled">bgp_route_translation_for_nat_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#id VpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.routingPreference">routing_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.scaleUnit">scale_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#tags VpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#location VpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#name VpnGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}.

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}.

---

##### `bgp_route_translation_for_nat_enabled`<sup>Optional</sup> <a name="bgp_route_translation_for_nat_enabled" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpRouteTranslationForNatEnabled"></a>

```python
bgp_route_translation_for_nat_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}.

---

##### `bgp_settings`<sup>Optional</sup> <a name="bgp_settings" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpSettings"></a>

```python
bgp_settings: VpnGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#bgp_settings VpnGateway#bgp_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#id VpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routing_preference`<sup>Optional</sup> <a name="routing_preference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.routingPreference"></a>

```python
routing_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}.

---

##### `scale_unit`<sup>Optional</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.scaleUnit"></a>

```python
scale_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#tags VpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.timeouts"></a>

```python
timeouts: VpnGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#timeouts VpnGateway#timeouts}

---

### VpnGatewayTimeouts <a name="VpnGatewayTimeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#create VpnGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#delete VpnGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#read VpnGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#update VpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#create VpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#delete VpnGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#read VpnGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#update VpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference <a name="VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps">default_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId">ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps">tunnel_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIpsInput">custom_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps">custom_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_ips`<sup>Required</sup> <a name="default_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps"></a>

```python
default_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_configuration_id`<sup>Required</sup> <a name="ip_configuration_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```python
ip_configuration_id: str
```

- *Type:* str

---

##### `tunnel_ips`<sup>Required</sup> <a name="tunnel_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```python
tunnel_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_ips_input`<sup>Optional</sup> <a name="custom_ips_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIpsInput"></a>

```python
custom_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_ips`<sup>Required</sup> <a name="custom_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps"></a>

```python
custom_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue"></a>

```python
internal_value: VpnGatewayBgpSettingsInstance0BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---


### VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference <a name="VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps">default_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId">ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps">tunnel_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIpsInput">custom_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps">custom_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_ips`<sup>Required</sup> <a name="default_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps"></a>

```python
default_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_configuration_id`<sup>Required</sup> <a name="ip_configuration_id" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```python
ip_configuration_id: str
```

- *Type:* str

---

##### `tunnel_ips`<sup>Required</sup> <a name="tunnel_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```python
tunnel_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_ips_input`<sup>Optional</sup> <a name="custom_ips_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIpsInput"></a>

```python
custom_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_ips`<sup>Required</sup> <a name="custom_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps"></a>

```python
custom_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue"></a>

```python
internal_value: VpnGatewayBgpSettingsInstance1BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---


### VpnGatewayBgpSettingsOutputReference <a name="VpnGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayBgpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress">put_instance0_bgp_peering_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress">put_instance1_bgp_peering_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance0BgpPeeringAddress">reset_instance0_bgp_peering_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance1BgpPeeringAddress">reset_instance1_bgp_peering_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instance0_bgp_peering_address` <a name="put_instance0_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress"></a>

```python
def put_instance0_bgp_peering_address(
  custom_ips: typing.List[str]
) -> None
```

###### `custom_ips`<sup>Required</sup> <a name="custom_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress.parameter.customIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

##### `put_instance1_bgp_peering_address` <a name="put_instance1_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress"></a>

```python
def put_instance1_bgp_peering_address(
  custom_ips: typing.List[str]
) -> None
```

###### `custom_ips`<sup>Required</sup> <a name="custom_ips" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress.parameter.customIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

##### `reset_instance0_bgp_peering_address` <a name="reset_instance0_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance0BgpPeeringAddress"></a>

```python
def reset_instance0_bgp_peering_address() -> None
```

##### `reset_instance1_bgp_peering_address` <a name="reset_instance1_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance1BgpPeeringAddress"></a>

```python
def reset_instance1_bgp_peering_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress">bgp_peering_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress">instance0_bgp_peering_address</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress">instance1_bgp_peering_address</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddressInput">instance0_bgp_peering_address_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddressInput">instance1_bgp_peering_address_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeightInput">peer_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_peering_address`<sup>Required</sup> <a name="bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress"></a>

```python
bgp_peering_address: str
```

- *Type:* str

---

##### `instance0_bgp_peering_address`<sup>Required</sup> <a name="instance0_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress"></a>

```python
instance0_bgp_peering_address: VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference</a>

---

##### `instance1_bgp_peering_address`<sup>Required</sup> <a name="instance1_bgp_peering_address" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress"></a>

```python
instance1_bgp_peering_address: VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference</a>

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance0_bgp_peering_address_input`<sup>Optional</sup> <a name="instance0_bgp_peering_address_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddressInput"></a>

```python
instance0_bgp_peering_address_input: VpnGatewayBgpSettingsInstance0BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---

##### `instance1_bgp_peering_address_input`<sup>Optional</sup> <a name="instance1_bgp_peering_address_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddressInput"></a>

```python
instance1_bgp_peering_address_input: VpnGatewayBgpSettingsInstance1BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---

##### `peer_weight_input`<sup>Optional</sup> <a name="peer_weight_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeightInput"></a>

```python
peer_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_weight`<sup>Required</sup> <a name="peer_weight" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: VpnGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---


### VpnGatewayTimeoutsOutputReference <a name="VpnGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway

vpnGateway.VpnGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>]

---



