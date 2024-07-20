# `trafficManagerExternalEndpoint` Submodule <a name="`trafficManagerExternalEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerExternalEndpoint <a name="TrafficManagerExternalEndpoint" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint azurerm_traffic_manager_external_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint(
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
  profile_id: str,
  target: str,
  always_serve_enabled: typing.Union[bool, IResolvable] = None,
  custom_header: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointCustomHeader]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  endpoint_location: str = None,
  geo_mappings: typing.List[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  subnet: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointSubnet]] = None,
  timeouts: TrafficManagerExternalEndpointTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.alwaysServeEnabled">always_serve_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#always_serve_enabled TrafficManagerExternalEndpoint#always_serve_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.customHeader">custom_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.endpointLocation">endpoint_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.geoMappings">geo_mappings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.subnet">subnet</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.profileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}.

---

##### `always_serve_enabled`<sup>Optional</sup> <a name="always_serve_enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.alwaysServeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#always_serve_enabled TrafficManagerExternalEndpoint#always_serve_enabled}.

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.customHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#custom_header TrafficManagerExternalEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}.

---

##### `endpoint_location`<sup>Optional</sup> <a name="endpoint_location" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.endpointLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}.

---

##### `geo_mappings`<sup>Optional</sup> <a name="geo_mappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.geoMappings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.subnet"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#subnet TrafficManagerExternalEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#timeouts TrafficManagerExternalEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader">put_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet">put_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetAlwaysServeEnabled">reset_always_serve_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetCustomHeader">reset_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEndpointLocation">reset_endpoint_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetGeoMappings">reset_geo_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_header` <a name="put_custom_header" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader"></a>

```python
def put_custom_header(
  value: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointCustomHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]

---

##### `put_subnet` <a name="put_subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet"></a>

```python
def put_subnet(
  value: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointSubnet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#create TrafficManagerExternalEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#delete TrafficManagerExternalEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#read TrafficManagerExternalEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#update TrafficManagerExternalEndpoint#update}.

---

##### `reset_always_serve_enabled` <a name="reset_always_serve_enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetAlwaysServeEnabled"></a>

```python
def reset_always_serve_enabled() -> None
```

##### `reset_custom_header` <a name="reset_custom_header" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetCustomHeader"></a>

```python
def reset_custom_header() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_endpoint_location` <a name="reset_endpoint_location" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEndpointLocation"></a>

```python
def reset_endpoint_location() -> None
```

##### `reset_geo_mappings` <a name="reset_geo_mappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetGeoMappings"></a>

```python
def reset_geo_mappings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TrafficManagerExternalEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TrafficManagerExternalEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TrafficManagerExternalEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TrafficManagerExternalEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TrafficManagerExternalEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeader">custom_header</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList">TrafficManagerExternalEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList">TrafficManagerExternalEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference">TrafficManagerExternalEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.alwaysServeEnabledInput">always_serve_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeaderInput">custom_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocationInput">endpoint_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappingsInput">geo_mappings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnetInput">subnet_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.alwaysServeEnabled">always_serve_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocation">endpoint_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappings">geo_mappings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_header`<sup>Required</sup> <a name="custom_header" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeader"></a>

```python
custom_header: TrafficManagerExternalEndpointCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList">TrafficManagerExternalEndpointCustomHeaderList</a>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnet"></a>

```python
subnet: TrafficManagerExternalEndpointSubnetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList">TrafficManagerExternalEndpointSubnetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeouts"></a>

```python
timeouts: TrafficManagerExternalEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference">TrafficManagerExternalEndpointTimeoutsOutputReference</a>

---

##### `always_serve_enabled_input`<sup>Optional</sup> <a name="always_serve_enabled_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.alwaysServeEnabledInput"></a>

```python
always_serve_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_header_input`<sup>Optional</sup> <a name="custom_header_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeaderInput"></a>

```python
custom_header_input: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_location_input`<sup>Optional</sup> <a name="endpoint_location_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocationInput"></a>

```python
endpoint_location_input: str
```

- *Type:* str

---

##### `geo_mappings_input`<sup>Optional</sup> <a name="geo_mappings_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappingsInput"></a>

```python
geo_mappings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnetInput"></a>

```python
subnet_input: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointSubnet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, TrafficManagerExternalEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `always_serve_enabled`<sup>Required</sup> <a name="always_serve_enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.alwaysServeEnabled"></a>

```python
always_serve_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_location`<sup>Required</sup> <a name="endpoint_location" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocation"></a>

```python
endpoint_location: str
```

- *Type:* str

---

##### `geo_mappings`<sup>Required</sup> <a name="geo_mappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappings"></a>

```python
geo_mappings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerExternalEndpointConfig <a name="TrafficManagerExternalEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  profile_id: str,
  target: str,
  always_serve_enabled: typing.Union[bool, IResolvable] = None,
  custom_header: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointCustomHeader]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  endpoint_location: str = None,
  geo_mappings: typing.List[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  subnet: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointSubnet]] = None,
  timeouts: TrafficManagerExternalEndpointTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.alwaysServeEnabled">always_serve_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#always_serve_enabled TrafficManagerExternalEndpoint#always_serve_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.customHeader">custom_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.endpointLocation">endpoint_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.geoMappings">geo_mappings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.subnet">subnet</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}.

---

##### `always_serve_enabled`<sup>Optional</sup> <a name="always_serve_enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.alwaysServeEnabled"></a>

```python
always_serve_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#always_serve_enabled TrafficManagerExternalEndpoint#always_serve_enabled}.

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.customHeader"></a>

```python
custom_header: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#custom_header TrafficManagerExternalEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}.

---

##### `endpoint_location`<sup>Optional</sup> <a name="endpoint_location" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.endpointLocation"></a>

```python
endpoint_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}.

---

##### `geo_mappings`<sup>Optional</sup> <a name="geo_mappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.geoMappings"></a>

```python
geo_mappings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.subnet"></a>

```python
subnet: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointSubnet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#subnet TrafficManagerExternalEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.timeouts"></a>

```python
timeouts: TrafficManagerExternalEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#timeouts TrafficManagerExternalEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}.

---

### TrafficManagerExternalEndpointCustomHeader <a name="TrafficManagerExternalEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#value TrafficManagerExternalEndpoint#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#value TrafficManagerExternalEndpoint#value}.

---

### TrafficManagerExternalEndpointSubnet <a name="TrafficManagerExternalEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet(
  first: str,
  last: str = None,
  scope: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.first">first</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#first TrafficManagerExternalEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.last">last</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#last TrafficManagerExternalEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.scope">scope</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#scope TrafficManagerExternalEndpoint#scope}. |

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.first"></a>

```python
first: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#first TrafficManagerExternalEndpoint#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.last"></a>

```python
last: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#last TrafficManagerExternalEndpoint#last}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.scope"></a>

```python
scope: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#scope TrafficManagerExternalEndpoint#scope}.

---

### TrafficManagerExternalEndpointTimeouts <a name="TrafficManagerExternalEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#create TrafficManagerExternalEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#delete TrafficManagerExternalEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#read TrafficManagerExternalEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#update TrafficManagerExternalEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#create TrafficManagerExternalEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#delete TrafficManagerExternalEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#read TrafficManagerExternalEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/traffic_manager_external_endpoint#update TrafficManagerExternalEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerExternalEndpointCustomHeaderList <a name="TrafficManagerExternalEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TrafficManagerExternalEndpointCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]]

---


### TrafficManagerExternalEndpointCustomHeaderOutputReference <a name="TrafficManagerExternalEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TrafficManagerExternalEndpointCustomHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>]

---


### TrafficManagerExternalEndpointSubnetList <a name="TrafficManagerExternalEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TrafficManagerExternalEndpointSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TrafficManagerExternalEndpointSubnet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]]

---


### TrafficManagerExternalEndpointSubnetOutputReference <a name="TrafficManagerExternalEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_last` <a name="reset_last" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.firstInput">first_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.lastInput">last_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scopeInput">scope_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.first">first</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.last">last</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scope">scope</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.firstInput"></a>

```python
first_input: str
```

- *Type:* str

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.lastInput"></a>

```python
last_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scopeInput"></a>

```python
scope_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.first"></a>

```python
first: str
```

- *Type:* str

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.last"></a>

```python
last: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scope"></a>

```python
scope: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TrafficManagerExternalEndpointSubnet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>]

---


### TrafficManagerExternalEndpointTimeoutsOutputReference <a name="TrafficManagerExternalEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import traffic_manager_external_endpoint

trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TrafficManagerExternalEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>]

---



