# `trafficManagerNestedEndpoint` Submodule <a name="`trafficManagerNestedEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerNestedEndpoint <a name="TrafficManagerNestedEndpoint" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint azurerm_traffic_manager_nested_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  minimum_child_endpoints: typing.Union[int, float],
  name: str,
  profile_id: str,
  target_resource_id: str,
  custom_header: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointCustomHeader]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  endpoint_location: str = None,
  geo_mappings: typing.List[str] = None,
  id: str = None,
  minimum_required_child_endpoints_ipv4: typing.Union[int, float] = None,
  minimum_required_child_endpoints_ipv6: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  subnet: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointSubnet]] = None,
  timeouts: TrafficManagerNestedEndpointTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumChildEndpoints">minimum_child_endpoints</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.customHeader">custom_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.endpointLocation">endpoint_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.geoMappings">geo_mappings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv4">minimum_required_child_endpoints_ipv4</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv6">minimum_required_child_endpoints_ipv6</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.subnet">subnet</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `minimum_child_endpoints`<sup>Required</sup> <a name="minimum_child_endpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumChildEndpoints"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.profileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}.

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.customHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#custom_header TrafficManagerNestedEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}.

---

##### `endpoint_location`<sup>Optional</sup> <a name="endpoint_location" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.endpointLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}.

---

##### `geo_mappings`<sup>Optional</sup> <a name="geo_mappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.geoMappings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_required_child_endpoints_ipv4`<sup>Optional</sup> <a name="minimum_required_child_endpoints_ipv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv4"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}.

---

##### `minimum_required_child_endpoints_ipv6`<sup>Optional</sup> <a name="minimum_required_child_endpoints_ipv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv6"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.subnet"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#subnet TrafficManagerNestedEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#timeouts TrafficManagerNestedEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader">put_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet">put_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader">reset_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation">reset_endpoint_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings">reset_geo_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4">reset_minimum_required_child_endpoints_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6">reset_minimum_required_child_endpoints_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_header` <a name="put_custom_header" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader"></a>

```python
def put_custom_header(
  value: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointCustomHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]

---

##### `put_subnet` <a name="put_subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet"></a>

```python
def put_subnet(
  value: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointSubnet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}.

---

##### `reset_custom_header` <a name="reset_custom_header" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader"></a>

```python
def reset_custom_header() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_endpoint_location` <a name="reset_endpoint_location" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation"></a>

```python
def reset_endpoint_location() -> None
```

##### `reset_geo_mappings` <a name="reset_geo_mappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings"></a>

```python
def reset_geo_mappings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_minimum_required_child_endpoints_ipv4` <a name="reset_minimum_required_child_endpoints_ipv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4"></a>

```python
def reset_minimum_required_child_endpoints_ipv4() -> None
```

##### `reset_minimum_required_child_endpoints_ipv6` <a name="reset_minimum_required_child_endpoints_ipv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6"></a>

```python
def reset_minimum_required_child_endpoints_ipv6() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TrafficManagerNestedEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TrafficManagerNestedEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TrafficManagerNestedEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TrafficManagerNestedEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TrafficManagerNestedEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader">custom_header</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput">custom_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput">endpoint_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput">geo_mappings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput">minimum_child_endpoints_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input">minimum_required_child_endpoints_ipv4_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input">minimum_required_child_endpoints_ipv6_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput">subnet_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation">endpoint_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings">geo_mappings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints">minimum_child_endpoints</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4">minimum_required_child_endpoints_ipv4</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6">minimum_required_child_endpoints_ipv6</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_header`<sup>Required</sup> <a name="custom_header" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader"></a>

```python
custom_header: TrafficManagerNestedEndpointCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet"></a>

```python
subnet: TrafficManagerNestedEndpointSubnetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts"></a>

```python
timeouts: TrafficManagerNestedEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a>

---

##### `custom_header_input`<sup>Optional</sup> <a name="custom_header_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput"></a>

```python
custom_header_input: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_location_input`<sup>Optional</sup> <a name="endpoint_location_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput"></a>

```python
endpoint_location_input: str
```

- *Type:* str

---

##### `geo_mappings_input`<sup>Optional</sup> <a name="geo_mappings_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput"></a>

```python
geo_mappings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `minimum_child_endpoints_input`<sup>Optional</sup> <a name="minimum_child_endpoints_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput"></a>

```python
minimum_child_endpoints_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_required_child_endpoints_ipv4_input`<sup>Optional</sup> <a name="minimum_required_child_endpoints_ipv4_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input"></a>

```python
minimum_required_child_endpoints_ipv4_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_required_child_endpoints_ipv6_input`<sup>Optional</sup> <a name="minimum_required_child_endpoints_ipv6_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input"></a>

```python
minimum_required_child_endpoints_ipv6_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput"></a>

```python
subnet_input: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointSubnet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, TrafficManagerNestedEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_location`<sup>Required</sup> <a name="endpoint_location" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation"></a>

```python
endpoint_location: str
```

- *Type:* str

---

##### `geo_mappings`<sup>Required</sup> <a name="geo_mappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings"></a>

```python
geo_mappings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `minimum_child_endpoints`<sup>Required</sup> <a name="minimum_child_endpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints"></a>

```python
minimum_child_endpoints: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_required_child_endpoints_ipv4`<sup>Required</sup> <a name="minimum_required_child_endpoints_ipv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4"></a>

```python
minimum_required_child_endpoints_ipv4: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_required_child_endpoints_ipv6`<sup>Required</sup> <a name="minimum_required_child_endpoints_ipv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6"></a>

```python
minimum_required_child_endpoints_ipv6: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerNestedEndpointConfig <a name="TrafficManagerNestedEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  minimum_child_endpoints: typing.Union[int, float],
  name: str,
  profile_id: str,
  target_resource_id: str,
  custom_header: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointCustomHeader]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  endpoint_location: str = None,
  geo_mappings: typing.List[str] = None,
  id: str = None,
  minimum_required_child_endpoints_ipv4: typing.Union[int, float] = None,
  minimum_required_child_endpoints_ipv6: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  subnet: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointSubnet]] = None,
  timeouts: TrafficManagerNestedEndpointTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints">minimum_child_endpoints</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader">custom_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation">endpoint_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings">geo_mappings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4">minimum_required_child_endpoints_ipv4</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6">minimum_required_child_endpoints_ipv6</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet">subnet</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `minimum_child_endpoints`<sup>Required</sup> <a name="minimum_child_endpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints"></a>

```python
minimum_child_endpoints: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}.

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader"></a>

```python
custom_header: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#custom_header TrafficManagerNestedEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}.

---

##### `endpoint_location`<sup>Optional</sup> <a name="endpoint_location" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation"></a>

```python
endpoint_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}.

---

##### `geo_mappings`<sup>Optional</sup> <a name="geo_mappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings"></a>

```python
geo_mappings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_required_child_endpoints_ipv4`<sup>Optional</sup> <a name="minimum_required_child_endpoints_ipv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4"></a>

```python
minimum_required_child_endpoints_ipv4: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}.

---

##### `minimum_required_child_endpoints_ipv6`<sup>Optional</sup> <a name="minimum_required_child_endpoints_ipv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6"></a>

```python
minimum_required_child_endpoints_ipv6: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet"></a>

```python
subnet: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointSubnet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#subnet TrafficManagerNestedEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts"></a>

```python
timeouts: TrafficManagerNestedEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#timeouts TrafficManagerNestedEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}.

---

### TrafficManagerNestedEndpointCustomHeader <a name="TrafficManagerNestedEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}.

---

### TrafficManagerNestedEndpointSubnet <a name="TrafficManagerNestedEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet(
  first: str,
  last: str = None,
  scope: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first">first</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last">last</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope">scope</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}. |

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first"></a>

```python
first: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last"></a>

```python
last: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope"></a>

```python
scope: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}.

---

### TrafficManagerNestedEndpointTimeouts <a name="TrafficManagerNestedEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerNestedEndpointCustomHeaderList <a name="TrafficManagerNestedEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TrafficManagerNestedEndpointCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]]

---


### TrafficManagerNestedEndpointCustomHeaderOutputReference <a name="TrafficManagerNestedEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TrafficManagerNestedEndpointCustomHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>]

---


### TrafficManagerNestedEndpointSubnetList <a name="TrafficManagerNestedEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TrafficManagerNestedEndpointSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TrafficManagerNestedEndpointSubnet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]]

---


### TrafficManagerNestedEndpointSubnetOutputReference <a name="TrafficManagerNestedEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_last` <a name="reset_last" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput">first_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput">last_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput">scope_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first">first</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last">last</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope">scope</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput"></a>

```python
first_input: str
```

- *Type:* str

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput"></a>

```python
last_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput"></a>

```python
scope_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first"></a>

```python
first: str
```

- *Type:* str

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last"></a>

```python
last: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope"></a>

```python
scope: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TrafficManagerNestedEndpointSubnet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>]

---


### TrafficManagerNestedEndpointTimeoutsOutputReference <a name="TrafficManagerNestedEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_nested_endpoint

trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TrafficManagerNestedEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>]

---



