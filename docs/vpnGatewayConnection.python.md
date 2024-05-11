# `vpnGatewayConnection` Submodule <a name="`vpnGatewayConnection` Submodule" id="@cdktf/provider-azurerm.vpnGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayConnection <a name="VpnGatewayConnection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection azurerm_vpn_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnection(
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
  remote_vpn_site_id: str,
  vpn_gateway_id: str,
  vpn_link: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLink]],
  id: str = None,
  internet_security_enabled: typing.Union[bool, IResolvable] = None,
  routing: VpnGatewayConnectionRouting = None,
  timeouts: VpnGatewayConnectionTimeouts = None,
  traffic_selector_policy: typing.Union[IResolvable, typing.List[VpnGatewayConnectionTrafficSelectorPolicy]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.remoteVpnSiteId">remote_vpn_site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.vpnLink">vpn_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]</code> | vpn_link block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.internetSecurityEnabled">internet_security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.trafficSelectorPolicy">traffic_selector_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]</code> | traffic_selector_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}.

---

##### `remote_vpn_site_id`<sup>Required</sup> <a name="remote_vpn_site_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.remoteVpnSiteId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}.

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.vpnGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}.

---

##### `vpn_link`<sup>Required</sup> <a name="vpn_link" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.vpnLink"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]

vpn_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_link VpnGatewayConnection#vpn_link}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_security_enabled`<sup>Optional</sup> <a name="internet_security_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.internetSecurityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.routing"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#routing VpnGatewayConnection#routing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#timeouts VpnGatewayConnection#timeouts}

---

##### `traffic_selector_policy`<sup>Optional</sup> <a name="traffic_selector_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.trafficSelectorPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#traffic_selector_policy VpnGatewayConnection#traffic_selector_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting">put_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy">put_traffic_selector_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink">put_vpn_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetInternetSecurityEnabled">reset_internet_security_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetRouting">reset_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTrafficSelectorPolicy">reset_traffic_selector_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing` <a name="put_routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting"></a>

```python
def put_routing(
  associated_route_table: str,
  inbound_route_map_id: str = None,
  outbound_route_map_id: str = None,
  propagated_route_table: VpnGatewayConnectionRoutingPropagatedRouteTable = None
) -> None
```

###### `associated_route_table`<sup>Required</sup> <a name="associated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting.parameter.associatedRouteTable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}.

---

###### `inbound_route_map_id`<sup>Optional</sup> <a name="inbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting.parameter.inboundRouteMapId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}.

---

###### `outbound_route_map_id`<sup>Optional</sup> <a name="outbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting.parameter.outboundRouteMapId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}.

---

###### `propagated_route_table`<sup>Optional</sup> <a name="propagated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting.parameter.propagatedRouteTable"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#propagated_route_table VpnGatewayConnection#propagated_route_table}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}.

---

##### `put_traffic_selector_policy` <a name="put_traffic_selector_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy"></a>

```python
def put_traffic_selector_policy(
  value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionTrafficSelectorPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]

---

##### `put_vpn_link` <a name="put_vpn_link" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink"></a>

```python
def put_vpn_link(
  value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLink]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internet_security_enabled` <a name="reset_internet_security_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetInternetSecurityEnabled"></a>

```python
def reset_internet_security_enabled() -> None
```

##### `reset_routing` <a name="reset_routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetRouting"></a>

```python
def reset_routing() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_selector_policy` <a name="reset_traffic_selector_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTrafficSelectorPolicy"></a>

```python
def reset_traffic_selector_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpnGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpnGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpnGatewayConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpnGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference">VpnGatewayConnectionRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference">VpnGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicy">traffic_selector_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList">VpnGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLink">vpn_link</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList">VpnGatewayConnectionVpnLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabledInput">internet_security_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteIdInput">remote_vpn_site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routingInput">routing_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicyInput">traffic_selector_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayIdInput">vpn_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLinkInput">vpn_link_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabled">internet_security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteId">remote_vpn_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routing"></a>

```python
routing: VpnGatewayConnectionRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference">VpnGatewayConnectionRoutingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeouts"></a>

```python
timeouts: VpnGatewayConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference">VpnGatewayConnectionTimeoutsOutputReference</a>

---

##### `traffic_selector_policy`<sup>Required</sup> <a name="traffic_selector_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicy"></a>

```python
traffic_selector_policy: VpnGatewayConnectionTrafficSelectorPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList">VpnGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `vpn_link`<sup>Required</sup> <a name="vpn_link" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLink"></a>

```python
vpn_link: VpnGatewayConnectionVpnLinkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList">VpnGatewayConnectionVpnLinkList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internet_security_enabled_input`<sup>Optional</sup> <a name="internet_security_enabled_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabledInput"></a>

```python
internet_security_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_vpn_site_id_input`<sup>Optional</sup> <a name="remote_vpn_site_id_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteIdInput"></a>

```python
remote_vpn_site_id_input: str
```

- *Type:* str

---

##### `routing_input`<sup>Optional</sup> <a name="routing_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routingInput"></a>

```python
routing_input: VpnGatewayConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpnGatewayConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>]

---

##### `traffic_selector_policy_input`<sup>Optional</sup> <a name="traffic_selector_policy_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicyInput"></a>

```python
traffic_selector_policy_input: typing.Union[IResolvable, typing.List[VpnGatewayConnectionTrafficSelectorPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]

---

##### `vpn_gateway_id_input`<sup>Optional</sup> <a name="vpn_gateway_id_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayIdInput"></a>

```python
vpn_gateway_id_input: str
```

- *Type:* str

---

##### `vpn_link_input`<sup>Optional</sup> <a name="vpn_link_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLinkInput"></a>

```python
vpn_link_input: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_security_enabled`<sup>Required</sup> <a name="internet_security_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabled"></a>

```python
internet_security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_vpn_site_id`<sup>Required</sup> <a name="remote_vpn_site_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteId"></a>

```python
remote_vpn_site_id: str
```

- *Type:* str

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayConnectionConfig <a name="VpnGatewayConnectionConfig" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  remote_vpn_site_id: str,
  vpn_gateway_id: str,
  vpn_link: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLink]],
  id: str = None,
  internet_security_enabled: typing.Union[bool, IResolvable] = None,
  routing: VpnGatewayConnectionRouting = None,
  timeouts: VpnGatewayConnectionTimeouts = None,
  traffic_selector_policy: typing.Union[IResolvable, typing.List[VpnGatewayConnectionTrafficSelectorPolicy]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.remoteVpnSiteId">remote_vpn_site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnLink">vpn_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]</code> | vpn_link block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.internetSecurityEnabled">internet_security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.trafficSelectorPolicy">traffic_selector_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]</code> | traffic_selector_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}.

---

##### `remote_vpn_site_id`<sup>Required</sup> <a name="remote_vpn_site_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.remoteVpnSiteId"></a>

```python
remote_vpn_site_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}.

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}.

---

##### `vpn_link`<sup>Required</sup> <a name="vpn_link" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnLink"></a>

```python
vpn_link: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]

vpn_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_link VpnGatewayConnection#vpn_link}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_security_enabled`<sup>Optional</sup> <a name="internet_security_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.internetSecurityEnabled"></a>

```python
internet_security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.routing"></a>

```python
routing: VpnGatewayConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#routing VpnGatewayConnection#routing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.timeouts"></a>

```python
timeouts: VpnGatewayConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#timeouts VpnGatewayConnection#timeouts}

---

##### `traffic_selector_policy`<sup>Optional</sup> <a name="traffic_selector_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.trafficSelectorPolicy"></a>

```python
traffic_selector_policy: typing.Union[IResolvable, typing.List[VpnGatewayConnectionTrafficSelectorPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#traffic_selector_policy VpnGatewayConnection#traffic_selector_policy}

---

### VpnGatewayConnectionRouting <a name="VpnGatewayConnectionRouting" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionRouting(
  associated_route_table: str,
  inbound_route_map_id: str = None,
  outbound_route_map_id: str = None,
  propagated_route_table: VpnGatewayConnectionRoutingPropagatedRouteTable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.associatedRouteTable">associated_route_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.inboundRouteMapId">inbound_route_map_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.outboundRouteMapId">outbound_route_map_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.propagatedRouteTable">propagated_route_table</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `associated_route_table`<sup>Required</sup> <a name="associated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.associatedRouteTable"></a>

```python
associated_route_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}.

---

##### `inbound_route_map_id`<sup>Optional</sup> <a name="inbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.inboundRouteMapId"></a>

```python
inbound_route_map_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}.

---

##### `outbound_route_map_id`<sup>Optional</sup> <a name="outbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.outboundRouteMapId"></a>

```python
outbound_route_map_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}.

---

##### `propagated_route_table`<sup>Optional</sup> <a name="propagated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.propagatedRouteTable"></a>

```python
propagated_route_table: VpnGatewayConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#propagated_route_table VpnGatewayConnection#propagated_route_table}

---

### VpnGatewayConnectionRoutingPropagatedRouteTable <a name="VpnGatewayConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable(
  route_table_ids: typing.List[str],
  labels: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.labels">labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}. |

---

##### `route_table_ids`<sup>Required</sup> <a name="route_table_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.routeTableIds"></a>

```python
route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}.

---

### VpnGatewayConnectionTimeouts <a name="VpnGatewayConnectionTimeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}.

---

### VpnGatewayConnectionTrafficSelectorPolicy <a name="VpnGatewayConnectionTrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy(
  local_address_ranges: typing.List[str],
  remote_address_ranges: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.localAddressRanges">local_address_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.remoteAddressRanges">remote_address_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}. |

---

##### `local_address_ranges`<sup>Required</sup> <a name="local_address_ranges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.localAddressRanges"></a>

```python
local_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}.

---

##### `remote_address_ranges`<sup>Required</sup> <a name="remote_address_ranges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.remoteAddressRanges"></a>

```python
remote_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}.

---

### VpnGatewayConnectionVpnLink <a name="VpnGatewayConnectionVpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLink(
  name: str,
  vpn_site_link_id: str,
  bandwidth_mbps: typing.Union[int, float] = None,
  bgp_enabled: typing.Union[bool, IResolvable] = None,
  connection_mode: str = None,
  custom_bgp_address: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkCustomBgpAddress]] = None,
  egress_nat_rule_ids: typing.List[str] = None,
  ingress_nat_rule_ids: typing.List[str] = None,
  ipsec_policy: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkIpsecPolicy]] = None,
  local_azure_ip_address_enabled: typing.Union[bool, IResolvable] = None,
  policy_based_traffic_selector_enabled: typing.Union[bool, IResolvable] = None,
  protocol: str = None,
  ratelimit_enabled: typing.Union[bool, IResolvable] = None,
  route_weight: typing.Union[int, float] = None,
  shared_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.vpnSiteLinkId">vpn_site_link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bandwidthMbps">bandwidth_mbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bgpEnabled">bgp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.connectionMode">connection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.customBgpAddress">custom_bgp_address</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]]</code> | custom_bgp_address block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.egressNatRuleIds">egress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ingressNatRuleIds">ingress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ipsecPolicy">ipsec_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]]</code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.localAzureIpAddressEnabled">local_azure_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.policyBasedTrafficSelectorEnabled">policy_based_traffic_selector_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ratelimitEnabled">ratelimit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.routeWeight">route_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.sharedKey">shared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}.

---

##### `vpn_site_link_id`<sup>Required</sup> <a name="vpn_site_link_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.vpnSiteLinkId"></a>

```python
vpn_site_link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}.

---

##### `bandwidth_mbps`<sup>Optional</sup> <a name="bandwidth_mbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bandwidthMbps"></a>

```python
bandwidth_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}.

---

##### `bgp_enabled`<sup>Optional</sup> <a name="bgp_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bgpEnabled"></a>

```python
bgp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}.

---

##### `connection_mode`<sup>Optional</sup> <a name="connection_mode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.connectionMode"></a>

```python
connection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}.

---

##### `custom_bgp_address`<sup>Optional</sup> <a name="custom_bgp_address" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.customBgpAddress"></a>

```python
custom_bgp_address: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkCustomBgpAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]]

custom_bgp_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#custom_bgp_address VpnGatewayConnection#custom_bgp_address}

---

##### `egress_nat_rule_ids`<sup>Optional</sup> <a name="egress_nat_rule_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.egressNatRuleIds"></a>

```python
egress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}.

---

##### `ingress_nat_rule_ids`<sup>Optional</sup> <a name="ingress_nat_rule_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ingressNatRuleIds"></a>

```python
ingress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}.

---

##### `ipsec_policy`<sup>Optional</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ipsecPolicy"></a>

```python
ipsec_policy: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkIpsecPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]]

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ipsec_policy VpnGatewayConnection#ipsec_policy}

---

##### `local_azure_ip_address_enabled`<sup>Optional</sup> <a name="local_azure_ip_address_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.localAzureIpAddressEnabled"></a>

```python
local_azure_ip_address_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}.

---

##### `policy_based_traffic_selector_enabled`<sup>Optional</sup> <a name="policy_based_traffic_selector_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.policyBasedTrafficSelectorEnabled"></a>

```python
policy_based_traffic_selector_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}.

---

##### `ratelimit_enabled`<sup>Optional</sup> <a name="ratelimit_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ratelimitEnabled"></a>

```python
ratelimit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}.

---

##### `route_weight`<sup>Optional</sup> <a name="route_weight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.routeWeight"></a>

```python
route_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}.

---

##### `shared_key`<sup>Optional</sup> <a name="shared_key" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}.

---

### VpnGatewayConnectionVpnLinkCustomBgpAddress <a name="VpnGatewayConnectionVpnLinkCustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress(
  ip_address: str,
  ip_configuration_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ip_address VpnGatewayConnection#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipConfigurationId">ip_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ip_configuration_id VpnGatewayConnection#ip_configuration_id}. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ip_address VpnGatewayConnection#ip_address}.

---

##### `ip_configuration_id`<sup>Required</sup> <a name="ip_configuration_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipConfigurationId"></a>

```python
ip_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ip_configuration_id VpnGatewayConnection#ip_configuration_id}.

---

### VpnGatewayConnectionVpnLinkIpsecPolicy <a name="VpnGatewayConnectionVpnLinkIpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy(
  dh_group: str,
  encryption_algorithm: str,
  ike_encryption_algorithm: str,
  ike_integrity_algorithm: str,
  integrity_algorithm: str,
  pfs_group: str,
  sa_data_size_kb: typing.Union[int, float],
  sa_lifetime_sec: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.dhGroup">dh_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeEncryptionAlgorithm">ike_encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeIntegrityAlgorithm">ike_integrity_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.integrityAlgorithm">integrity_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.pfsGroup">pfs_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saDataSizeKb">sa_data_size_kb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saLifetimeSec">sa_lifetime_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}. |

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}.

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}.

---

##### `ike_encryption_algorithm`<sup>Required</sup> <a name="ike_encryption_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeEncryptionAlgorithm"></a>

```python
ike_encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}.

---

##### `ike_integrity_algorithm`<sup>Required</sup> <a name="ike_integrity_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeIntegrityAlgorithm"></a>

```python
ike_integrity_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}.

---

##### `integrity_algorithm`<sup>Required</sup> <a name="integrity_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.integrityAlgorithm"></a>

```python
integrity_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}.

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}.

---

##### `sa_data_size_kb`<sup>Required</sup> <a name="sa_data_size_kb" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saDataSizeKb"></a>

```python
sa_data_size_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}.

---

##### `sa_lifetime_sec`<sup>Required</sup> <a name="sa_lifetime_sec" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saLifetimeSec"></a>

```python
sa_lifetime_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayConnectionRoutingOutputReference <a name="VpnGatewayConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable">put_propagated_route_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetInboundRouteMapId">reset_inbound_route_map_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetOutboundRouteMapId">reset_outbound_route_map_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetPropagatedRouteTable">reset_propagated_route_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_propagated_route_table` <a name="put_propagated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable"></a>

```python
def put_propagated_route_table(
  route_table_ids: typing.List[str],
  labels: typing.List[str] = None
) -> None
```

###### `route_table_ids`<sup>Required</sup> <a name="route_table_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.routeTableIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}.

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.labels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}.

---

##### `reset_inbound_route_map_id` <a name="reset_inbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetInboundRouteMapId"></a>

```python
def reset_inbound_route_map_id() -> None
```

##### `reset_outbound_route_map_id` <a name="reset_outbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetOutboundRouteMapId"></a>

```python
def reset_outbound_route_map_id() -> None
```

##### `reset_propagated_route_table` <a name="reset_propagated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetPropagatedRouteTable"></a>

```python
def reset_propagated_route_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTable">propagated_route_table</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference">VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTableInput">associated_route_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapIdInput">inbound_route_map_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapIdInput">outbound_route_map_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTableInput">propagated_route_table_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTable">associated_route_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapId">inbound_route_map_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapId">outbound_route_map_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `propagated_route_table`<sup>Required</sup> <a name="propagated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```python
propagated_route_table: VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference">VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference</a>

---

##### `associated_route_table_input`<sup>Optional</sup> <a name="associated_route_table_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTableInput"></a>

```python
associated_route_table_input: str
```

- *Type:* str

---

##### `inbound_route_map_id_input`<sup>Optional</sup> <a name="inbound_route_map_id_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapIdInput"></a>

```python
inbound_route_map_id_input: str
```

- *Type:* str

---

##### `outbound_route_map_id_input`<sup>Optional</sup> <a name="outbound_route_map_id_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapIdInput"></a>

```python
outbound_route_map_id_input: str
```

- *Type:* str

---

##### `propagated_route_table_input`<sup>Optional</sup> <a name="propagated_route_table_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTableInput"></a>

```python
propagated_route_table_input: VpnGatewayConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---

##### `associated_route_table`<sup>Required</sup> <a name="associated_route_table" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTable"></a>

```python
associated_route_table: str
```

- *Type:* str

---

##### `inbound_route_map_id`<sup>Required</sup> <a name="inbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```python
inbound_route_map_id: str
```

- *Type:* str

---

##### `outbound_route_map_id`<sup>Required</sup> <a name="outbound_route_map_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```python
outbound_route_map_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.internalValue"></a>

```python
internal_value: VpnGatewayConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---


### VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference <a name="VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput">route_table_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `route_table_ids_input`<sup>Optional</sup> <a name="route_table_ids_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput"></a>

```python
route_table_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `route_table_ids`<sup>Required</sup> <a name="route_table_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```python
route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```python
internal_value: VpnGatewayConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---


### VpnGatewayConnectionTimeoutsOutputReference <a name="VpnGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnGatewayConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>]

---


### VpnGatewayConnectionTrafficSelectorPolicyList <a name="VpnGatewayConnectionTrafficSelectorPolicyList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnGatewayConnectionTrafficSelectorPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionTrafficSelectorPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]]

---


### VpnGatewayConnectionTrafficSelectorPolicyOutputReference <a name="VpnGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRangesInput">local_address_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRangesInput">remote_address_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRanges">local_address_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRanges">remote_address_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_address_ranges_input`<sup>Optional</sup> <a name="local_address_ranges_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRangesInput"></a>

```python
local_address_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_address_ranges_input`<sup>Optional</sup> <a name="remote_address_ranges_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRangesInput"></a>

```python
remote_address_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_address_ranges`<sup>Required</sup> <a name="local_address_ranges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRanges"></a>

```python
local_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_address_ranges`<sup>Required</sup> <a name="remote_address_ranges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRanges"></a>

```python
remote_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnGatewayConnectionTrafficSelectorPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>]

---


### VpnGatewayConnectionVpnLinkCustomBgpAddressList <a name="VpnGatewayConnectionVpnLinkCustomBgpAddressList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkCustomBgpAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]]

---


### VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference <a name="VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationIdInput">ip_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationId">ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_configuration_id_input`<sup>Optional</sup> <a name="ip_configuration_id_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationIdInput"></a>

```python
ip_configuration_id_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_configuration_id`<sup>Required</sup> <a name="ip_configuration_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationId"></a>

```python
ip_configuration_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnGatewayConnectionVpnLinkCustomBgpAddress]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]

---


### VpnGatewayConnectionVpnLinkIpsecPolicyList <a name="VpnGatewayConnectionVpnLinkIpsecPolicyList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkIpsecPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]]

---


### VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference <a name="VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroupInput">dh_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithmInput">ike_encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithmInput">ike_integrity_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithmInput">integrity_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroupInput">pfs_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKbInput">sa_data_size_kb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSecInput">sa_lifetime_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithm">ike_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithm">ike_integrity_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithm">integrity_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroup">pfs_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKb">sa_data_size_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSec">sa_lifetime_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dh_group_input`<sup>Optional</sup> <a name="dh_group_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroupInput"></a>

```python
dh_group_input: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `ike_encryption_algorithm_input`<sup>Optional</sup> <a name="ike_encryption_algorithm_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithmInput"></a>

```python
ike_encryption_algorithm_input: str
```

- *Type:* str

---

##### `ike_integrity_algorithm_input`<sup>Optional</sup> <a name="ike_integrity_algorithm_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithmInput"></a>

```python
ike_integrity_algorithm_input: str
```

- *Type:* str

---

##### `integrity_algorithm_input`<sup>Optional</sup> <a name="integrity_algorithm_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithmInput"></a>

```python
integrity_algorithm_input: str
```

- *Type:* str

---

##### `pfs_group_input`<sup>Optional</sup> <a name="pfs_group_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```python
pfs_group_input: str
```

- *Type:* str

---

##### `sa_data_size_kb_input`<sup>Optional</sup> <a name="sa_data_size_kb_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKbInput"></a>

```python
sa_data_size_kb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime_sec_input`<sup>Optional</sup> <a name="sa_lifetime_sec_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSecInput"></a>

```python
sa_lifetime_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `ike_encryption_algorithm`<sup>Required</sup> <a name="ike_encryption_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithm"></a>

```python
ike_encryption_algorithm: str
```

- *Type:* str

---

##### `ike_integrity_algorithm`<sup>Required</sup> <a name="ike_integrity_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithm"></a>

```python
ike_integrity_algorithm: str
```

- *Type:* str

---

##### `integrity_algorithm`<sup>Required</sup> <a name="integrity_algorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithm"></a>

```python
integrity_algorithm: str
```

- *Type:* str

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

---

##### `sa_data_size_kb`<sup>Required</sup> <a name="sa_data_size_kb" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKb"></a>

```python
sa_data_size_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime_sec`<sup>Required</sup> <a name="sa_lifetime_sec" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSec"></a>

```python
sa_lifetime_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnGatewayConnectionVpnLinkIpsecPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]

---


### VpnGatewayConnectionVpnLinkList <a name="VpnGatewayConnectionVpnLinkList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnGatewayConnectionVpnLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]]

---


### VpnGatewayConnectionVpnLinkOutputReference <a name="VpnGatewayConnectionVpnLinkOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_gateway_connection

vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress">put_custom_bgp_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy">put_ipsec_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBandwidthMbps">reset_bandwidth_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBgpEnabled">reset_bgp_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetConnectionMode">reset_connection_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetCustomBgpAddress">reset_custom_bgp_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetEgressNatRuleIds">reset_egress_nat_rule_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIngressNatRuleIds">reset_ingress_nat_rule_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIpsecPolicy">reset_ipsec_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetLocalAzureIpAddressEnabled">reset_local_azure_ip_address_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetPolicyBasedTrafficSelectorEnabled">reset_policy_based_traffic_selector_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRatelimitEnabled">reset_ratelimit_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRouteWeight">reset_route_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetSharedKey">reset_shared_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_bgp_address` <a name="put_custom_bgp_address" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress"></a>

```python
def put_custom_bgp_address(
  value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkCustomBgpAddress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]]

---

##### `put_ipsec_policy` <a name="put_ipsec_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy"></a>

```python
def put_ipsec_policy(
  value: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkIpsecPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]]

---

##### `reset_bandwidth_mbps` <a name="reset_bandwidth_mbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBandwidthMbps"></a>

```python
def reset_bandwidth_mbps() -> None
```

##### `reset_bgp_enabled` <a name="reset_bgp_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBgpEnabled"></a>

```python
def reset_bgp_enabled() -> None
```

##### `reset_connection_mode` <a name="reset_connection_mode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetConnectionMode"></a>

```python
def reset_connection_mode() -> None
```

##### `reset_custom_bgp_address` <a name="reset_custom_bgp_address" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetCustomBgpAddress"></a>

```python
def reset_custom_bgp_address() -> None
```

##### `reset_egress_nat_rule_ids` <a name="reset_egress_nat_rule_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetEgressNatRuleIds"></a>

```python
def reset_egress_nat_rule_ids() -> None
```

##### `reset_ingress_nat_rule_ids` <a name="reset_ingress_nat_rule_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIngressNatRuleIds"></a>

```python
def reset_ingress_nat_rule_ids() -> None
```

##### `reset_ipsec_policy` <a name="reset_ipsec_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIpsecPolicy"></a>

```python
def reset_ipsec_policy() -> None
```

##### `reset_local_azure_ip_address_enabled` <a name="reset_local_azure_ip_address_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetLocalAzureIpAddressEnabled"></a>

```python
def reset_local_azure_ip_address_enabled() -> None
```

##### `reset_policy_based_traffic_selector_enabled` <a name="reset_policy_based_traffic_selector_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetPolicyBasedTrafficSelectorEnabled"></a>

```python
def reset_policy_based_traffic_selector_enabled() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_ratelimit_enabled` <a name="reset_ratelimit_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRatelimitEnabled"></a>

```python
def reset_ratelimit_enabled() -> None
```

##### `reset_route_weight` <a name="reset_route_weight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRouteWeight"></a>

```python
def reset_route_weight() -> None
```

##### `reset_shared_key` <a name="reset_shared_key" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetSharedKey"></a>

```python
def reset_shared_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddress">custom_bgp_address</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList">VpnGatewayConnectionVpnLinkCustomBgpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList">VpnGatewayConnectionVpnLinkIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbpsInput">bandwidth_mbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabledInput">bgp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionModeInput">connection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddressInput">custom_bgp_address_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIdsInput">egress_nat_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIdsInput">ingress_nat_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicyInput">ipsec_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabledInput">local_azure_ip_address_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabledInput">policy_based_traffic_selector_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabledInput">ratelimit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeightInput">route_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKeyInput">shared_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkIdInput">vpn_site_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbps">bandwidth_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabled">bgp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionMode">connection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIds">egress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIds">ingress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabled">local_azure_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabled">policy_based_traffic_selector_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabled">ratelimit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeight">route_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKey">shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkId">vpn_site_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_bgp_address`<sup>Required</sup> <a name="custom_bgp_address" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddress"></a>

```python
custom_bgp_address: VpnGatewayConnectionVpnLinkCustomBgpAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList">VpnGatewayConnectionVpnLinkCustomBgpAddressList</a>

---

##### `ipsec_policy`<sup>Required</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicy"></a>

```python
ipsec_policy: VpnGatewayConnectionVpnLinkIpsecPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList">VpnGatewayConnectionVpnLinkIpsecPolicyList</a>

---

##### `bandwidth_mbps_input`<sup>Optional</sup> <a name="bandwidth_mbps_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbpsInput"></a>

```python
bandwidth_mbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_enabled_input`<sup>Optional</sup> <a name="bgp_enabled_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabledInput"></a>

```python
bgp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_mode_input`<sup>Optional</sup> <a name="connection_mode_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionModeInput"></a>

```python
connection_mode_input: str
```

- *Type:* str

---

##### `custom_bgp_address_input`<sup>Optional</sup> <a name="custom_bgp_address_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddressInput"></a>

```python
custom_bgp_address_input: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkCustomBgpAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>]]

---

##### `egress_nat_rule_ids_input`<sup>Optional</sup> <a name="egress_nat_rule_ids_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIdsInput"></a>

```python
egress_nat_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_nat_rule_ids_input`<sup>Optional</sup> <a name="ingress_nat_rule_ids_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIdsInput"></a>

```python
ingress_nat_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipsec_policy_input`<sup>Optional</sup> <a name="ipsec_policy_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicyInput"></a>

```python
ipsec_policy_input: typing.Union[IResolvable, typing.List[VpnGatewayConnectionVpnLinkIpsecPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>]]

---

##### `local_azure_ip_address_enabled_input`<sup>Optional</sup> <a name="local_azure_ip_address_enabled_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabledInput"></a>

```python
local_azure_ip_address_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_based_traffic_selector_enabled_input`<sup>Optional</sup> <a name="policy_based_traffic_selector_enabled_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabledInput"></a>

```python
policy_based_traffic_selector_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ratelimit_enabled_input`<sup>Optional</sup> <a name="ratelimit_enabled_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabledInput"></a>

```python
ratelimit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_weight_input`<sup>Optional</sup> <a name="route_weight_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeightInput"></a>

```python
route_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_key_input`<sup>Optional</sup> <a name="shared_key_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKeyInput"></a>

```python
shared_key_input: str
```

- *Type:* str

---

##### `vpn_site_link_id_input`<sup>Optional</sup> <a name="vpn_site_link_id_input" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkIdInput"></a>

```python
vpn_site_link_id_input: str
```

- *Type:* str

---

##### `bandwidth_mbps`<sup>Required</sup> <a name="bandwidth_mbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbps"></a>

```python
bandwidth_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_enabled`<sup>Required</sup> <a name="bgp_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabled"></a>

```python
bgp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_mode`<sup>Required</sup> <a name="connection_mode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionMode"></a>

```python
connection_mode: str
```

- *Type:* str

---

##### `egress_nat_rule_ids`<sup>Required</sup> <a name="egress_nat_rule_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIds"></a>

```python
egress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_nat_rule_ids`<sup>Required</sup> <a name="ingress_nat_rule_ids" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIds"></a>

```python
ingress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_azure_ip_address_enabled`<sup>Required</sup> <a name="local_azure_ip_address_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabled"></a>

```python
local_azure_ip_address_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_based_traffic_selector_enabled`<sup>Required</sup> <a name="policy_based_traffic_selector_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabled"></a>

```python
policy_based_traffic_selector_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ratelimit_enabled`<sup>Required</sup> <a name="ratelimit_enabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabled"></a>

```python
ratelimit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_weight`<sup>Required</sup> <a name="route_weight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeight"></a>

```python
route_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_key`<sup>Required</sup> <a name="shared_key" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

---

##### `vpn_site_link_id`<sup>Required</sup> <a name="vpn_site_link_id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkId"></a>

```python
vpn_site_link_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnGatewayConnectionVpnLink]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>]

---



