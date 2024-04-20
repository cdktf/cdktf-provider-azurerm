# `cdnFrontdoorOriginGroup` Submodule <a name="`cdnFrontdoorOriginGroup` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorOriginGroup <a name="CdnFrontdoorOriginGroup" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_profile_id: str,
  load_balancing: CdnFrontdoorOriginGroupLoadBalancing,
  name: str,
  health_probe: CdnFrontdoorOriginGroupHealthProbe = None,
  id: str = None,
  restore_traffic_time_to_healed_or_new_endpoint_in_minutes: typing.Union[int, float] = None,
  session_affinity_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: CdnFrontdoorOriginGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.healthProbe">health_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restore_traffic_time_to_healed_or_new_endpoint_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.sessionAffinityEnabled">session_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}.

---

##### `load_balancing`<sup>Required</sup> <a name="load_balancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.loadBalancing"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#load_balancing CdnFrontdoorOriginGroup#load_balancing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}.

---

##### `health_probe`<sup>Optional</sup> <a name="health_probe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.healthProbe"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#health_probe CdnFrontdoorOriginGroup#health_probe}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_traffic_time_to_healed_or_new_endpoint_in_minutes`<sup>Optional</sup> <a name="restore_traffic_time_to_healed_or_new_endpoint_in_minutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}.

---

##### `session_affinity_enabled`<sup>Optional</sup> <a name="session_affinity_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.sessionAffinityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#timeouts CdnFrontdoorOriginGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe">put_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing">put_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe">reset_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes">reset_restore_traffic_time_to_healed_or_new_endpoint_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled">reset_session_affinity_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_probe` <a name="put_health_probe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe"></a>

```python
def put_health_probe(
  interval_in_seconds: typing.Union[int, float],
  protocol: str,
  path: str = None,
  request_type: str = None
) -> None
```

###### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe.parameter.intervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}.

---

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}.

---

###### `request_type`<sup>Optional</sup> <a name="request_type" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe.parameter.requestType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}.

---

##### `put_load_balancing` <a name="put_load_balancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing"></a>

```python
def put_load_balancing(
  additional_latency_in_milliseconds: typing.Union[int, float] = None,
  sample_size: typing.Union[int, float] = None,
  successful_samples_required: typing.Union[int, float] = None
) -> None
```

###### `additional_latency_in_milliseconds`<sup>Optional</sup> <a name="additional_latency_in_milliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing.parameter.additionalLatencyInMilliseconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}.

---

###### `sample_size`<sup>Optional</sup> <a name="sample_size" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing.parameter.sampleSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}.

---

###### `successful_samples_required`<sup>Optional</sup> <a name="successful_samples_required" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing.parameter.successfulSamplesRequired"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}.

---

##### `reset_health_probe` <a name="reset_health_probe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe"></a>

```python
def reset_health_probe() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_restore_traffic_time_to_healed_or_new_endpoint_in_minutes` <a name="reset_restore_traffic_time_to_healed_or_new_endpoint_in_minutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```python
def reset_restore_traffic_time_to_healed_or_new_endpoint_in_minutes() -> None
```

##### `reset_session_affinity_enabled` <a name="reset_session_affinity_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled"></a>

```python
def reset_session_affinity_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CdnFrontdoorOriginGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CdnFrontdoorOriginGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorOriginGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe">health_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput">cdn_frontdoor_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput">health_probe_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput">load_balancing_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput">restore_traffic_time_to_healed_or_new_endpoint_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput">session_affinity_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restore_traffic_time_to_healed_or_new_endpoint_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled">session_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_probe`<sup>Required</sup> <a name="health_probe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe"></a>

```python
health_probe: CdnFrontdoorOriginGroupHealthProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a>

---

##### `load_balancing`<sup>Required</sup> <a name="load_balancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing"></a>

```python
load_balancing: CdnFrontdoorOriginGroupLoadBalancingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts"></a>

```python
timeouts: CdnFrontdoorOriginGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a>

---

##### `cdn_frontdoor_profile_id_input`<sup>Optional</sup> <a name="cdn_frontdoor_profile_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput"></a>

```python
cdn_frontdoor_profile_id_input: str
```

- *Type:* str

---

##### `health_probe_input`<sup>Optional</sup> <a name="health_probe_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput"></a>

```python
health_probe_input: CdnFrontdoorOriginGroupHealthProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancing_input`<sup>Optional</sup> <a name="load_balancing_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput"></a>

```python
load_balancing_input: CdnFrontdoorOriginGroupLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `restore_traffic_time_to_healed_or_new_endpoint_in_minutes_input`<sup>Optional</sup> <a name="restore_traffic_time_to_healed_or_new_endpoint_in_minutes_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput"></a>

```python
restore_traffic_time_to_healed_or_new_endpoint_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_affinity_enabled_input`<sup>Optional</sup> <a name="session_affinity_enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput"></a>

```python
session_affinity_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CdnFrontdoorOriginGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `restore_traffic_time_to_healed_or_new_endpoint_in_minutes`<sup>Required</sup> <a name="restore_traffic_time_to_healed_or_new_endpoint_in_minutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```python
restore_traffic_time_to_healed_or_new_endpoint_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_affinity_enabled`<sup>Required</sup> <a name="session_affinity_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled"></a>

```python
session_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorOriginGroupConfig <a name="CdnFrontdoorOriginGroupConfig" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_profile_id: str,
  load_balancing: CdnFrontdoorOriginGroupLoadBalancing,
  name: str,
  health_probe: CdnFrontdoorOriginGroupHealthProbe = None,
  id: str = None,
  restore_traffic_time_to_healed_or_new_endpoint_in_minutes: typing.Union[int, float] = None,
  session_affinity_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: CdnFrontdoorOriginGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe">health_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restore_traffic_time_to_healed_or_new_endpoint_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled">session_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}.

---

##### `load_balancing`<sup>Required</sup> <a name="load_balancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing"></a>

```python
load_balancing: CdnFrontdoorOriginGroupLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#load_balancing CdnFrontdoorOriginGroup#load_balancing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}.

---

##### `health_probe`<sup>Optional</sup> <a name="health_probe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe"></a>

```python
health_probe: CdnFrontdoorOriginGroupHealthProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#health_probe CdnFrontdoorOriginGroup#health_probe}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_traffic_time_to_healed_or_new_endpoint_in_minutes`<sup>Optional</sup> <a name="restore_traffic_time_to_healed_or_new_endpoint_in_minutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```python
restore_traffic_time_to_healed_or_new_endpoint_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}.

---

##### `session_affinity_enabled`<sup>Optional</sup> <a name="session_affinity_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled"></a>

```python
session_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts"></a>

```python
timeouts: CdnFrontdoorOriginGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#timeouts CdnFrontdoorOriginGroup#timeouts}

---

### CdnFrontdoorOriginGroupHealthProbe <a name="CdnFrontdoorOriginGroupHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe(
  interval_in_seconds: typing.Union[int, float],
  protocol: str,
  path: str = None,
  request_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType">request_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}. |

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}.

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}.

---

### CdnFrontdoorOriginGroupLoadBalancing <a name="CdnFrontdoorOriginGroupLoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing(
  additional_latency_in_milliseconds: typing.Union[int, float] = None,
  sample_size: typing.Union[int, float] = None,
  successful_samples_required: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds">additional_latency_in_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired">successful_samples_required</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}. |

---

##### `additional_latency_in_milliseconds`<sup>Optional</sup> <a name="additional_latency_in_milliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds"></a>

```python
additional_latency_in_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}.

---

##### `sample_size`<sup>Optional</sup> <a name="sample_size" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}.

---

##### `successful_samples_required`<sup>Optional</sup> <a name="successful_samples_required" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired"></a>

```python
successful_samples_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}.

---

### CdnFrontdoorOriginGroupTimeouts <a name="CdnFrontdoorOriginGroupTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorOriginGroupHealthProbeOutputReference <a name="CdnFrontdoorOriginGroupHealthProbeOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType">reset_request_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_request_type` <a name="reset_request_type" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType"></a>

```python
def reset_request_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput">interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput">request_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_in_seconds_input`<sup>Optional</sup> <a name="interval_in_seconds_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```python
interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `request_type_input`<sup>Optional</sup> <a name="request_type_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput"></a>

```python
request_type_input: str
```

- *Type:* str

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue"></a>

```python
internal_value: CdnFrontdoorOriginGroupHealthProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---


### CdnFrontdoorOriginGroupLoadBalancingOutputReference <a name="CdnFrontdoorOriginGroupLoadBalancingOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds">reset_additional_latency_in_milliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize">reset_sample_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired">reset_successful_samples_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_latency_in_milliseconds` <a name="reset_additional_latency_in_milliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds"></a>

```python
def reset_additional_latency_in_milliseconds() -> None
```

##### `reset_sample_size` <a name="reset_sample_size" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize"></a>

```python
def reset_sample_size() -> None
```

##### `reset_successful_samples_required` <a name="reset_successful_samples_required" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```python
def reset_successful_samples_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput">additional_latency_in_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput">sample_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput">successful_samples_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds">additional_latency_in_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired">successful_samples_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_latency_in_milliseconds_input`<sup>Optional</sup> <a name="additional_latency_in_milliseconds_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput"></a>

```python
additional_latency_in_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sample_size_input`<sup>Optional</sup> <a name="sample_size_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput"></a>

```python
sample_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `successful_samples_required_input`<sup>Optional</sup> <a name="successful_samples_required_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```python
successful_samples_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_latency_in_milliseconds`<sup>Required</sup> <a name="additional_latency_in_milliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds"></a>

```python
additional_latency_in_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sample_size`<sup>Required</sup> <a name="sample_size" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `successful_samples_required`<sup>Required</sup> <a name="successful_samples_required" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```python
successful_samples_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue"></a>

```python
internal_value: CdnFrontdoorOriginGroupLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---


### CdnFrontdoorOriginGroupTimeoutsOutputReference <a name="CdnFrontdoorOriginGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin_group

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorOriginGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>]

---



