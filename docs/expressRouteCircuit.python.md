# `expressRouteCircuit` Submodule <a name="`expressRouteCircuit` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuit <a name="ExpressRouteCircuit" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit azurerm_express_route_circuit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuit(
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
  sku: ExpressRouteCircuitSku,
  allow_classic_operations: typing.Union[bool, IResolvable] = None,
  authorization_key: str = None,
  bandwidth_in_gbps: typing.Union[int, float] = None,
  bandwidth_in_mbps: typing.Union[int, float] = None,
  express_route_port_id: str = None,
  id: str = None,
  peering_location: str = None,
  service_provider_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ExpressRouteCircuitTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#location ExpressRouteCircuit#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#name ExpressRouteCircuit#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#resource_group_name ExpressRouteCircuit#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.allowClassicOperations">allow_classic_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#allow_classic_operations ExpressRouteCircuit#allow_classic_operations}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.authorizationKey">authorization_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#authorization_key ExpressRouteCircuit#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.bandwidthInGbps">bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_gbps ExpressRouteCircuit#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.bandwidthInMbps">bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_mbps ExpressRouteCircuit#bandwidth_in_mbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.expressRoutePortId">express_route_port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#express_route_port_id ExpressRouteCircuit#express_route_port_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#id ExpressRouteCircuit#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.peeringLocation">peering_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#peering_location ExpressRouteCircuit#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.serviceProviderName">service_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#service_provider_name ExpressRouteCircuit#service_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#tags ExpressRouteCircuit#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#location ExpressRouteCircuit#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#name ExpressRouteCircuit#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#resource_group_name ExpressRouteCircuit#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#sku ExpressRouteCircuit#sku}

---

##### `allow_classic_operations`<sup>Optional</sup> <a name="allow_classic_operations" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.allowClassicOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#allow_classic_operations ExpressRouteCircuit#allow_classic_operations}.

---

##### `authorization_key`<sup>Optional</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.authorizationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#authorization_key ExpressRouteCircuit#authorization_key}.

---

##### `bandwidth_in_gbps`<sup>Optional</sup> <a name="bandwidth_in_gbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.bandwidthInGbps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_gbps ExpressRouteCircuit#bandwidth_in_gbps}.

---

##### `bandwidth_in_mbps`<sup>Optional</sup> <a name="bandwidth_in_mbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.bandwidthInMbps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_mbps ExpressRouteCircuit#bandwidth_in_mbps}.

---

##### `express_route_port_id`<sup>Optional</sup> <a name="express_route_port_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.expressRoutePortId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#express_route_port_id ExpressRouteCircuit#express_route_port_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#id ExpressRouteCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peering_location`<sup>Optional</sup> <a name="peering_location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.peeringLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#peering_location ExpressRouteCircuit#peering_location}.

---

##### `service_provider_name`<sup>Optional</sup> <a name="service_provider_name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.serviceProviderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#service_provider_name ExpressRouteCircuit#service_provider_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#tags ExpressRouteCircuit#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#timeouts ExpressRouteCircuit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putSku">put_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAllowClassicOperations">reset_allow_classic_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAuthorizationKey">reset_authorization_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInGbps">reset_bandwidth_in_gbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInMbps">reset_bandwidth_in_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetExpressRoutePortId">reset_express_route_port_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetPeeringLocation">reset_peering_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetServiceProviderName">reset_service_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sku` <a name="put_sku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putSku"></a>

```python
def put_sku(
  family: str,
  tier: str
) -> None
```

###### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putSku.parameter.family"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#family ExpressRouteCircuit#family}.

---

###### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putSku.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#tier ExpressRouteCircuit#tier}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#create ExpressRouteCircuit#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#delete ExpressRouteCircuit#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#read ExpressRouteCircuit#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#update ExpressRouteCircuit#update}.

---

##### `reset_allow_classic_operations` <a name="reset_allow_classic_operations" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAllowClassicOperations"></a>

```python
def reset_allow_classic_operations() -> None
```

##### `reset_authorization_key` <a name="reset_authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAuthorizationKey"></a>

```python
def reset_authorization_key() -> None
```

##### `reset_bandwidth_in_gbps` <a name="reset_bandwidth_in_gbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInGbps"></a>

```python
def reset_bandwidth_in_gbps() -> None
```

##### `reset_bandwidth_in_mbps` <a name="reset_bandwidth_in_mbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInMbps"></a>

```python
def reset_bandwidth_in_mbps() -> None
```

##### `reset_express_route_port_id` <a name="reset_express_route_port_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetExpressRoutePortId"></a>

```python
def reset_express_route_port_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_peering_location` <a name="reset_peering_location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetPeeringLocation"></a>

```python
def reset_peering_location() -> None
```

##### `reset_service_provider_name` <a name="reset_service_provider_name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetServiceProviderName"></a>

```python
def reset_service_provider_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExpressRouteCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExpressRouteCircuit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExpressRouteCircuit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExpressRouteCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderProvisioningState">service_provider_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference">ExpressRouteCircuitSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference">ExpressRouteCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperationsInput">allow_classic_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKeyInput">authorization_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbpsInput">bandwidth_in_gbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbpsInput">bandwidth_in_mbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortIdInput">express_route_port_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocationInput">peering_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderNameInput">service_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.skuInput">sku_input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperations">allow_classic_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKey">authorization_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbps">bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbps">bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortId">express_route_port_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocation">peering_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `service_provider_provisioning_state`<sup>Required</sup> <a name="service_provider_provisioning_state" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderProvisioningState"></a>

```python
service_provider_provisioning_state: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.sku"></a>

```python
sku: ExpressRouteCircuitSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference">ExpressRouteCircuitSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeouts"></a>

```python
timeouts: ExpressRouteCircuitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference">ExpressRouteCircuitTimeoutsOutputReference</a>

---

##### `allow_classic_operations_input`<sup>Optional</sup> <a name="allow_classic_operations_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperationsInput"></a>

```python
allow_classic_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization_key_input`<sup>Optional</sup> <a name="authorization_key_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKeyInput"></a>

```python
authorization_key_input: str
```

- *Type:* str

---

##### `bandwidth_in_gbps_input`<sup>Optional</sup> <a name="bandwidth_in_gbps_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbpsInput"></a>

```python
bandwidth_in_gbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_in_mbps_input`<sup>Optional</sup> <a name="bandwidth_in_mbps_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbpsInput"></a>

```python
bandwidth_in_mbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `express_route_port_id_input`<sup>Optional</sup> <a name="express_route_port_id_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortIdInput"></a>

```python
express_route_port_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peering_location_input`<sup>Optional</sup> <a name="peering_location_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocationInput"></a>

```python
peering_location_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_provider_name_input`<sup>Optional</sup> <a name="service_provider_name_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderNameInput"></a>

```python
service_provider_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.skuInput"></a>

```python
sku_input: ExpressRouteCircuitSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExpressRouteCircuitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>]

---

##### `allow_classic_operations`<sup>Required</sup> <a name="allow_classic_operations" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperations"></a>

```python
allow_classic_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization_key`<sup>Required</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

---

##### `bandwidth_in_gbps`<sup>Required</sup> <a name="bandwidth_in_gbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbps"></a>

```python
bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_in_mbps`<sup>Required</sup> <a name="bandwidth_in_mbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbps"></a>

```python
bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `express_route_port_id`<sup>Required</sup> <a name="express_route_port_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortId"></a>

```python
express_route_port_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peering_location`<sup>Required</sup> <a name="peering_location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocation"></a>

```python
peering_location: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitConfig <a name="ExpressRouteCircuitConfig" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuitConfig(
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
  sku: ExpressRouteCircuitSku,
  allow_classic_operations: typing.Union[bool, IResolvable] = None,
  authorization_key: str = None,
  bandwidth_in_gbps: typing.Union[int, float] = None,
  bandwidth_in_mbps: typing.Union[int, float] = None,
  express_route_port_id: str = None,
  id: str = None,
  peering_location: str = None,
  service_provider_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ExpressRouteCircuitTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#location ExpressRouteCircuit#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#name ExpressRouteCircuit#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#resource_group_name ExpressRouteCircuit#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.allowClassicOperations">allow_classic_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#allow_classic_operations ExpressRouteCircuit#allow_classic_operations}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.authorizationKey">authorization_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#authorization_key ExpressRouteCircuit#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInGbps">bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_gbps ExpressRouteCircuit#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInMbps">bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_mbps ExpressRouteCircuit#bandwidth_in_mbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.expressRoutePortId">express_route_port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#express_route_port_id ExpressRouteCircuit#express_route_port_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#id ExpressRouteCircuit#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.peeringLocation">peering_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#peering_location ExpressRouteCircuit#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#service_provider_name ExpressRouteCircuit#service_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#tags ExpressRouteCircuit#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#location ExpressRouteCircuit#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#name ExpressRouteCircuit#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#resource_group_name ExpressRouteCircuit#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.sku"></a>

```python
sku: ExpressRouteCircuitSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#sku ExpressRouteCircuit#sku}

---

##### `allow_classic_operations`<sup>Optional</sup> <a name="allow_classic_operations" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.allowClassicOperations"></a>

```python
allow_classic_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#allow_classic_operations ExpressRouteCircuit#allow_classic_operations}.

---

##### `authorization_key`<sup>Optional</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#authorization_key ExpressRouteCircuit#authorization_key}.

---

##### `bandwidth_in_gbps`<sup>Optional</sup> <a name="bandwidth_in_gbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInGbps"></a>

```python
bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_gbps ExpressRouteCircuit#bandwidth_in_gbps}.

---

##### `bandwidth_in_mbps`<sup>Optional</sup> <a name="bandwidth_in_mbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInMbps"></a>

```python
bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#bandwidth_in_mbps ExpressRouteCircuit#bandwidth_in_mbps}.

---

##### `express_route_port_id`<sup>Optional</sup> <a name="express_route_port_id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.expressRoutePortId"></a>

```python
express_route_port_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#express_route_port_id ExpressRouteCircuit#express_route_port_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#id ExpressRouteCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peering_location`<sup>Optional</sup> <a name="peering_location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.peeringLocation"></a>

```python
peering_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#peering_location ExpressRouteCircuit#peering_location}.

---

##### `service_provider_name`<sup>Optional</sup> <a name="service_provider_name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#service_provider_name ExpressRouteCircuit#service_provider_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#tags ExpressRouteCircuit#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.timeouts"></a>

```python
timeouts: ExpressRouteCircuitTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#timeouts ExpressRouteCircuit#timeouts}

---

### ExpressRouteCircuitSku <a name="ExpressRouteCircuitSku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuitSku(
  family: str,
  tier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#family ExpressRouteCircuit#family}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#tier ExpressRouteCircuit#tier}. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.family"></a>

```python
family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#family ExpressRouteCircuit#family}.

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#tier ExpressRouteCircuit#tier}.

---

### ExpressRouteCircuitTimeouts <a name="ExpressRouteCircuitTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuitTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#create ExpressRouteCircuit#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#delete ExpressRouteCircuit#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#read ExpressRouteCircuit#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#update ExpressRouteCircuit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#create ExpressRouteCircuit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#delete ExpressRouteCircuit#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#read ExpressRouteCircuit#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_circuit#update ExpressRouteCircuit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitSkuOutputReference <a name="ExpressRouteCircuitSkuOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuitSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.internalValue"></a>

```python
internal_value: ExpressRouteCircuitSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

---


### ExpressRouteCircuitTimeoutsOutputReference <a name="ExpressRouteCircuitTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit

expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExpressRouteCircuitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>]

---



