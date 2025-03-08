# `frontdoor` Submodule <a name="`frontdoor` Submodule" id="@cdktf/provider-azurerm.frontdoor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frontdoor <a name="Frontdoor" id="@cdktf/provider-azurerm.frontdoor.Frontdoor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor azurerm_frontdoor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.Frontdoor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_pool: typing.Union[IResolvable, typing.List[FrontdoorBackendPool]],
  backend_pool_health_probe: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolHealthProbe]],
  backend_pool_load_balancing: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolLoadBalancing]],
  frontend_endpoint: typing.Union[IResolvable, typing.List[FrontdoorFrontendEndpoint]],
  name: str,
  resource_group_name: str,
  routing_rule: typing.Union[IResolvable, typing.List[FrontdoorRoutingRule]],
  backend_pool_settings: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolSettings]] = None,
  friendly_name: str = None,
  id: str = None,
  load_balancer_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: FrontdoorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPool">backend_pool</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]</code> | backend_pool block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolHealthProbe">backend_pool_health_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]</code> | backend_pool_health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolLoadBalancing">backend_pool_load_balancing</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]</code> | backend_pool_load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.frontendEndpoint">frontend_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]</code> | frontend_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.routingRule">routing_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]</code> | routing_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolSettings">backend_pool_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]</code> | backend_pool_settings block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#id Frontdoor#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.loadBalancerEnabled">load_balancer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#tags Frontdoor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_pool`<sup>Required</sup> <a name="backend_pool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPool"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]

backend_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}

---

##### `backend_pool_health_probe`<sup>Required</sup> <a name="backend_pool_health_probe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolHealthProbe"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]

backend_pool_health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}

---

##### `backend_pool_load_balancing`<sup>Required</sup> <a name="backend_pool_load_balancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolLoadBalancing"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]

backend_pool_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}

---

##### `frontend_endpoint`<sup>Required</sup> <a name="frontend_endpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.frontendEndpoint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]

frontend_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}.

---

##### `routing_rule`<sup>Required</sup> <a name="routing_rule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.routingRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}

---

##### `backend_pool_settings`<sup>Optional</sup> <a name="backend_pool_settings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]

backend_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.friendlyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#id Frontdoor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_enabled`<sup>Optional</sup> <a name="load_balancer_enabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.loadBalancerEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#tags Frontdoor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool">put_backend_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe">put_backend_pool_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing">put_backend_pool_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings">put_backend_pool_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint">put_frontend_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule">put_routing_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings">reset_backend_pool_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled">reset_load_balancer_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend_pool` <a name="put_backend_pool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool"></a>

```python
def put_backend_pool(
  value: typing.Union[IResolvable, typing.List[FrontdoorBackendPool]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]

---

##### `put_backend_pool_health_probe` <a name="put_backend_pool_health_probe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe"></a>

```python
def put_backend_pool_health_probe(
  value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolHealthProbe]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]

---

##### `put_backend_pool_load_balancing` <a name="put_backend_pool_load_balancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing"></a>

```python
def put_backend_pool_load_balancing(
  value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolLoadBalancing]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]

---

##### `put_backend_pool_settings` <a name="put_backend_pool_settings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings"></a>

```python
def put_backend_pool_settings(
  value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]

---

##### `put_frontend_endpoint` <a name="put_frontend_endpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint"></a>

```python
def put_frontend_endpoint(
  value: typing.Union[IResolvable, typing.List[FrontdoorFrontendEndpoint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]

---

##### `put_routing_rule` <a name="put_routing_rule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule"></a>

```python
def put_routing_rule(
  value: typing.Union[IResolvable, typing.List[FrontdoorRoutingRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#create Frontdoor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#delete Frontdoor#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#read Frontdoor#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#update Frontdoor#update}.

---

##### `reset_backend_pool_settings` <a name="reset_backend_pool_settings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings"></a>

```python
def reset_backend_pool_settings() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancer_enabled` <a name="reset_load_balancer_enabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled"></a>

```python
def reset_load_balancer_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.Frontdoor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.Frontdoor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.Frontdoor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.Frontdoor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Frontdoor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Frontdoor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Frontdoor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool">backend_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe">backend_pool_health_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes">backend_pool_health_probes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing">backend_pool_load_balancing</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings">backend_pool_load_balancing_settings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools">backend_pools</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings">backend_pool_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder">explicit_resource_order</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint">frontend_endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints">frontend_endpoints</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId">header_frontdoor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule">routing_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules">routing_rules</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput">backend_pool_health_probe_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput">backend_pool_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput">backend_pool_load_balancing_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput">backend_pool_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput">frontend_endpoint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput">load_balancer_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput">routing_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled">load_balancer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_pool`<sup>Required</sup> <a name="backend_pool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool"></a>

```python
backend_pool: FrontdoorBackendPoolList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a>

---

##### `backend_pool_health_probe`<sup>Required</sup> <a name="backend_pool_health_probe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe"></a>

```python
backend_pool_health_probe: FrontdoorBackendPoolHealthProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a>

---

##### `backend_pool_health_probes`<sup>Required</sup> <a name="backend_pool_health_probes" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes"></a>

```python
backend_pool_health_probes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `backend_pool_load_balancing`<sup>Required</sup> <a name="backend_pool_load_balancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing"></a>

```python
backend_pool_load_balancing: FrontdoorBackendPoolLoadBalancingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a>

---

##### `backend_pool_load_balancing_settings`<sup>Required</sup> <a name="backend_pool_load_balancing_settings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings"></a>

```python
backend_pool_load_balancing_settings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `backend_pools`<sup>Required</sup> <a name="backend_pools" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools"></a>

```python
backend_pools: StringMap
```

- *Type:* cdktf.StringMap

---

##### `backend_pool_settings`<sup>Required</sup> <a name="backend_pool_settings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings"></a>

```python
backend_pool_settings: FrontdoorBackendPoolSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a>

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `explicit_resource_order`<sup>Required</sup> <a name="explicit_resource_order" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder"></a>

```python
explicit_resource_order: FrontdoorExplicitResourceOrderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a>

---

##### `frontend_endpoint`<sup>Required</sup> <a name="frontend_endpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint"></a>

```python
frontend_endpoint: FrontdoorFrontendEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a>

---

##### `frontend_endpoints`<sup>Required</sup> <a name="frontend_endpoints" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints"></a>

```python
frontend_endpoints: StringMap
```

- *Type:* cdktf.StringMap

---

##### `header_frontdoor_id`<sup>Required</sup> <a name="header_frontdoor_id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId"></a>

```python
header_frontdoor_id: str
```

- *Type:* str

---

##### `routing_rule`<sup>Required</sup> <a name="routing_rule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule"></a>

```python
routing_rule: FrontdoorRoutingRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a>

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules"></a>

```python
routing_rules: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts"></a>

```python
timeouts: FrontdoorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a>

---

##### `backend_pool_health_probe_input`<sup>Optional</sup> <a name="backend_pool_health_probe_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput"></a>

```python
backend_pool_health_probe_input: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolHealthProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]

---

##### `backend_pool_input`<sup>Optional</sup> <a name="backend_pool_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput"></a>

```python
backend_pool_input: typing.Union[IResolvable, typing.List[FrontdoorBackendPool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]

---

##### `backend_pool_load_balancing_input`<sup>Optional</sup> <a name="backend_pool_load_balancing_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput"></a>

```python
backend_pool_load_balancing_input: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolLoadBalancing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]

---

##### `backend_pool_settings_input`<sup>Optional</sup> <a name="backend_pool_settings_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput"></a>

```python
backend_pool_settings_input: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `frontend_endpoint_input`<sup>Optional</sup> <a name="frontend_endpoint_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput"></a>

```python
frontend_endpoint_input: typing.Union[IResolvable, typing.List[FrontdoorFrontendEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_enabled_input`<sup>Optional</sup> <a name="load_balancer_enabled_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput"></a>

```python
load_balancer_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `routing_rule_input`<sup>Optional</sup> <a name="routing_rule_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput"></a>

```python
routing_rule_input: typing.Union[IResolvable, typing.List[FrontdoorRoutingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FrontdoorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>]

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_enabled`<sup>Required</sup> <a name="load_balancer_enabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled"></a>

```python
load_balancer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorBackendPool <a name="FrontdoorBackendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPool(
  backend: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolBackend]],
  health_probe_name: str,
  load_balancing_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend">backend</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]]</code> | backend block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName">health_probe_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName">load_balancing_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}. |

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend"></a>

```python
backend: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend Frontdoor#backend}

---

##### `health_probe_name`<sup>Required</sup> <a name="health_probe_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName"></a>

```python
health_probe_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}.

---

##### `load_balancing_name`<sup>Required</sup> <a name="load_balancing_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName"></a>

```python
load_balancing_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}.

---

### FrontdoorBackendPoolBackend <a name="FrontdoorBackendPoolBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolBackend(
  address: str,
  host_header: str,
  http_port: typing.Union[int, float],
  https_port: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#address Frontdoor#address}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader">host_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#host_header Frontdoor#host_header}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#http_port Frontdoor#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#https_port Frontdoor#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#priority Frontdoor#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#weight Frontdoor#weight}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#address Frontdoor#address}.

---

##### `host_header`<sup>Required</sup> <a name="host_header" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader"></a>

```python
host_header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#host_header Frontdoor#host_header}.

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#http_port Frontdoor#http_port}.

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#https_port Frontdoor#https_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#priority Frontdoor#priority}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#weight Frontdoor#weight}.

---

### FrontdoorBackendPoolHealthProbe <a name="FrontdoorBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolHealthProbe(
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  interval_in_seconds: typing.Union[int, float] = None,
  path: str = None,
  probe_method: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#path Frontdoor#path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod">probe_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#protocol Frontdoor#protocol}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `interval_in_seconds`<sup>Optional</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#path Frontdoor#path}.

---

##### `probe_method`<sup>Optional</sup> <a name="probe_method" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod"></a>

```python
probe_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#protocol Frontdoor#protocol}.

---

### FrontdoorBackendPoolLoadBalancing <a name="FrontdoorBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolLoadBalancing(
  name: str,
  additional_latency_milliseconds: typing.Union[int, float] = None,
  sample_size: typing.Union[int, float] = None,
  successful_samples_required: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds">additional_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired">successful_samples_required</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `additional_latency_milliseconds`<sup>Optional</sup> <a name="additional_latency_milliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds"></a>

```python
additional_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}.

---

##### `sample_size`<sup>Optional</sup> <a name="sample_size" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}.

---

##### `successful_samples_required`<sup>Optional</sup> <a name="successful_samples_required" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired"></a>

```python
successful_samples_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}.

---

### FrontdoorBackendPoolSettings <a name="FrontdoorBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolSettings(
  enforce_backend_pools_certificate_name_check: typing.Union[bool, IResolvable],
  backend_pools_send_receive_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck">enforce_backend_pools_certificate_name_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds">backend_pools_send_receive_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}. |

---

##### `enforce_backend_pools_certificate_name_check`<sup>Required</sup> <a name="enforce_backend_pools_certificate_name_check" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck"></a>

```python
enforce_backend_pools_certificate_name_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}.

---

##### `backend_pools_send_receive_timeout_seconds`<sup>Optional</sup> <a name="backend_pools_send_receive_timeout_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```python
backend_pools_send_receive_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}.

---

### FrontdoorConfig <a name="FrontdoorConfig" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_pool: typing.Union[IResolvable, typing.List[FrontdoorBackendPool]],
  backend_pool_health_probe: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolHealthProbe]],
  backend_pool_load_balancing: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolLoadBalancing]],
  frontend_endpoint: typing.Union[IResolvable, typing.List[FrontdoorFrontendEndpoint]],
  name: str,
  resource_group_name: str,
  routing_rule: typing.Union[IResolvable, typing.List[FrontdoorRoutingRule]],
  backend_pool_settings: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolSettings]] = None,
  friendly_name: str = None,
  id: str = None,
  load_balancer_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: FrontdoorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool">backend_pool</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]</code> | backend_pool block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe">backend_pool_health_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]</code> | backend_pool_health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing">backend_pool_load_balancing</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]</code> | backend_pool_load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint">frontend_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]</code> | frontend_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule">routing_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]</code> | routing_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings">backend_pool_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]</code> | backend_pool_settings block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#id Frontdoor#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled">load_balancer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#tags Frontdoor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_pool`<sup>Required</sup> <a name="backend_pool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool"></a>

```python
backend_pool: typing.Union[IResolvable, typing.List[FrontdoorBackendPool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]

backend_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}

---

##### `backend_pool_health_probe`<sup>Required</sup> <a name="backend_pool_health_probe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe"></a>

```python
backend_pool_health_probe: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolHealthProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]

backend_pool_health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}

---

##### `backend_pool_load_balancing`<sup>Required</sup> <a name="backend_pool_load_balancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing"></a>

```python
backend_pool_load_balancing: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolLoadBalancing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]

backend_pool_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}

---

##### `frontend_endpoint`<sup>Required</sup> <a name="frontend_endpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint"></a>

```python
frontend_endpoint: typing.Union[IResolvable, typing.List[FrontdoorFrontendEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]

frontend_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}.

---

##### `routing_rule`<sup>Required</sup> <a name="routing_rule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule"></a>

```python
routing_rule: typing.Union[IResolvable, typing.List[FrontdoorRoutingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}

---

##### `backend_pool_settings`<sup>Optional</sup> <a name="backend_pool_settings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings"></a>

```python
backend_pool_settings: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]

backend_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#id Frontdoor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_enabled`<sup>Optional</sup> <a name="load_balancer_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled"></a>

```python
load_balancer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#tags Frontdoor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts"></a>

```python
timeouts: FrontdoorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}

---

### FrontdoorExplicitResourceOrder <a name="FrontdoorExplicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorExplicitResourceOrder()
```


### FrontdoorFrontendEndpoint <a name="FrontdoorFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorFrontendEndpoint(
  host_name: str,
  name: str,
  session_affinity_enabled: typing.Union[bool, IResolvable] = None,
  session_affinity_ttl_seconds: typing.Union[int, float] = None,
  web_application_firewall_policy_link_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#host_name Frontdoor#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled">session_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds">session_affinity_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId">web_application_firewall_policy_link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#host_name Frontdoor#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `session_affinity_enabled`<sup>Optional</sup> <a name="session_affinity_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled"></a>

```python
session_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}.

---

##### `session_affinity_ttl_seconds`<sup>Optional</sup> <a name="session_affinity_ttl_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds"></a>

```python
session_affinity_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}.

---

##### `web_application_firewall_policy_link_id`<sup>Optional</sup> <a name="web_application_firewall_policy_link_id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId"></a>

```python
web_application_firewall_policy_link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}.

---

### FrontdoorRoutingRule <a name="FrontdoorRoutingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorRoutingRule(
  accepted_protocols: typing.List[str],
  frontend_endpoints: typing.List[str],
  name: str,
  patterns_to_match: typing.List[str],
  enabled: typing.Union[bool, IResolvable] = None,
  forwarding_configuration: FrontdoorRoutingRuleForwardingConfiguration = None,
  redirect_configuration: FrontdoorRoutingRuleRedirectConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols">accepted_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints">frontend_endpoints</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch">patterns_to_match</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration">forwarding_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | forwarding_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration">redirect_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | redirect_configuration block. |

---

##### `accepted_protocols`<sup>Required</sup> <a name="accepted_protocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols"></a>

```python
accepted_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}.

---

##### `frontend_endpoints`<sup>Required</sup> <a name="frontend_endpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints"></a>

```python
frontend_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `patterns_to_match`<sup>Required</sup> <a name="patterns_to_match" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch"></a>

```python
patterns_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `forwarding_configuration`<sup>Optional</sup> <a name="forwarding_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration"></a>

```python
forwarding_configuration: FrontdoorRoutingRuleForwardingConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

forwarding_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#forwarding_configuration Frontdoor#forwarding_configuration}

---

##### `redirect_configuration`<sup>Optional</sup> <a name="redirect_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration"></a>

```python
redirect_configuration: FrontdoorRoutingRuleRedirectConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

redirect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#redirect_configuration Frontdoor#redirect_configuration}

---

### FrontdoorRoutingRuleForwardingConfiguration <a name="FrontdoorRoutingRuleForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorRoutingRuleForwardingConfiguration(
  backend_pool_name: str,
  cache_duration: str = None,
  cache_enabled: typing.Union[bool, IResolvable] = None,
  cache_query_parameters: typing.List[str] = None,
  cache_query_parameter_strip_directive: str = None,
  cache_use_dynamic_compression: typing.Union[bool, IResolvable] = None,
  custom_forwarding_path: str = None,
  forwarding_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName">backend_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration">cache_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled">cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters">cache_query_parameters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective">cache_query_parameter_strip_directive</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression">cache_use_dynamic_compression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath">custom_forwarding_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol">forwarding_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}. |

---

##### `backend_pool_name`<sup>Required</sup> <a name="backend_pool_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName"></a>

```python
backend_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}.

---

##### `cache_duration`<sup>Optional</sup> <a name="cache_duration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration"></a>

```python
cache_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}.

---

##### `cache_enabled`<sup>Optional</sup> <a name="cache_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled"></a>

```python
cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}.

---

##### `cache_query_parameters`<sup>Optional</sup> <a name="cache_query_parameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters"></a>

```python
cache_query_parameters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}.

---

##### `cache_query_parameter_strip_directive`<sup>Optional</sup> <a name="cache_query_parameter_strip_directive" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective"></a>

```python
cache_query_parameter_strip_directive: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}.

---

##### `cache_use_dynamic_compression`<sup>Optional</sup> <a name="cache_use_dynamic_compression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression"></a>

```python
cache_use_dynamic_compression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}.

---

##### `custom_forwarding_path`<sup>Optional</sup> <a name="custom_forwarding_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath"></a>

```python
custom_forwarding_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}.

---

##### `forwarding_protocol`<sup>Optional</sup> <a name="forwarding_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol"></a>

```python
forwarding_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}.

---

### FrontdoorRoutingRuleRedirectConfiguration <a name="FrontdoorRoutingRuleRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorRoutingRuleRedirectConfiguration(
  redirect_protocol: str,
  redirect_type: str,
  custom_fragment: str = None,
  custom_host: str = None,
  custom_path: str = None,
  custom_query_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol">redirect_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType">redirect_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment">custom_fragment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost">custom_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath">custom_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString">custom_query_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}. |

---

##### `redirect_protocol`<sup>Required</sup> <a name="redirect_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol"></a>

```python
redirect_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}.

---

##### `redirect_type`<sup>Required</sup> <a name="redirect_type" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType"></a>

```python
redirect_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}.

---

##### `custom_fragment`<sup>Optional</sup> <a name="custom_fragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment"></a>

```python
custom_fragment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}.

---

##### `custom_host`<sup>Optional</sup> <a name="custom_host" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost"></a>

```python
custom_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}.

---

##### `custom_path`<sup>Optional</sup> <a name="custom_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath"></a>

```python
custom_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}.

---

##### `custom_query_string`<sup>Optional</sup> <a name="custom_query_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString"></a>

```python
custom_query_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}.

---

### FrontdoorTimeouts <a name="FrontdoorTimeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#create Frontdoor#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#delete Frontdoor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#read Frontdoor#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#update Frontdoor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#create Frontdoor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#delete Frontdoor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#read Frontdoor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#update Frontdoor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorBackendPoolBackendList <a name="FrontdoorBackendPoolBackendList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolBackendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorBackendPoolBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]]

---


### FrontdoorBackendPoolBackendOutputReference <a name="FrontdoorBackendPoolBackendOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput">host_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput">http_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput">https_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader">host_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_header_input`<sup>Optional</sup> <a name="host_header_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput"></a>

```python
host_header_input: str
```

- *Type:* str

---

##### `http_port_input`<sup>Optional</sup> <a name="http_port_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput"></a>

```python
http_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port_input`<sup>Optional</sup> <a name="https_port_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput"></a>

```python
https_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_header`<sup>Required</sup> <a name="host_header" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader"></a>

```python
host_header: str
```

- *Type:* str

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorBackendPoolBackend]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]

---


### FrontdoorBackendPoolHealthProbeList <a name="FrontdoorBackendPoolHealthProbeList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolHealthProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorBackendPoolHealthProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolHealthProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]]

---


### FrontdoorBackendPoolHealthProbeOutputReference <a name="FrontdoorBackendPoolHealthProbeOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolHealthProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds">reset_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod">reset_probe_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_interval_in_seconds` <a name="reset_interval_in_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds"></a>

```python
def reset_interval_in_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_probe_method` <a name="reset_probe_method" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod"></a>

```python
def reset_probe_method() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput">interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput">probe_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod">probe_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `interval_in_seconds_input`<sup>Optional</sup> <a name="interval_in_seconds_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```python
interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `probe_method_input`<sup>Optional</sup> <a name="probe_method_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput"></a>

```python
probe_method_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `probe_method`<sup>Required</sup> <a name="probe_method" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod"></a>

```python
probe_method: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorBackendPoolHealthProbe]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>]

---


### FrontdoorBackendPoolList <a name="FrontdoorBackendPoolList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorBackendPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorBackendPool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]]

---


### FrontdoorBackendPoolLoadBalancingList <a name="FrontdoorBackendPoolLoadBalancingList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolLoadBalancingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorBackendPoolLoadBalancingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolLoadBalancing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]]

---


### FrontdoorBackendPoolLoadBalancingOutputReference <a name="FrontdoorBackendPoolLoadBalancingOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds">reset_additional_latency_milliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize">reset_sample_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired">reset_successful_samples_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_latency_milliseconds` <a name="reset_additional_latency_milliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds"></a>

```python
def reset_additional_latency_milliseconds() -> None
```

##### `reset_sample_size` <a name="reset_sample_size" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize"></a>

```python
def reset_sample_size() -> None
```

##### `reset_successful_samples_required` <a name="reset_successful_samples_required" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```python
def reset_successful_samples_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput">additional_latency_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput">sample_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput">successful_samples_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds">additional_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired">successful_samples_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `additional_latency_milliseconds_input`<sup>Optional</sup> <a name="additional_latency_milliseconds_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput"></a>

```python
additional_latency_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sample_size_input`<sup>Optional</sup> <a name="sample_size_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput"></a>

```python
sample_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `successful_samples_required_input`<sup>Optional</sup> <a name="successful_samples_required_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```python
successful_samples_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_latency_milliseconds`<sup>Required</sup> <a name="additional_latency_milliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds"></a>

```python
additional_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sample_size`<sup>Required</sup> <a name="sample_size" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `successful_samples_required`<sup>Required</sup> <a name="successful_samples_required" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```python
successful_samples_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorBackendPoolLoadBalancing]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>]

---


### FrontdoorBackendPoolOutputReference <a name="FrontdoorBackendPoolOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend">put_backend</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend` <a name="put_backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend"></a>

```python
def put_backend(
  value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolBackend]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput">backend_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput">health_probe_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput">load_balancing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName">health_probe_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName">load_balancing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend"></a>

```python
backend: FrontdoorBackendPoolBackendList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput"></a>

```python
backend_input: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>]]

---

##### `health_probe_name_input`<sup>Optional</sup> <a name="health_probe_name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput"></a>

```python
health_probe_name_input: str
```

- *Type:* str

---

##### `load_balancing_name_input`<sup>Optional</sup> <a name="load_balancing_name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput"></a>

```python
load_balancing_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `health_probe_name`<sup>Required</sup> <a name="health_probe_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName"></a>

```python
health_probe_name: str
```

- *Type:* str

---

##### `load_balancing_name`<sup>Required</sup> <a name="load_balancing_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName"></a>

```python
load_balancing_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorBackendPool]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>]

---


### FrontdoorBackendPoolSettingsList <a name="FrontdoorBackendPoolSettingsList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorBackendPoolSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorBackendPoolSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]]

---


### FrontdoorBackendPoolSettingsOutputReference <a name="FrontdoorBackendPoolSettingsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorBackendPoolSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds">reset_backend_pools_send_receive_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backend_pools_send_receive_timeout_seconds` <a name="reset_backend_pools_send_receive_timeout_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds"></a>

```python
def reset_backend_pools_send_receive_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput">backend_pools_send_receive_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput">enforce_backend_pools_certificate_name_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds">backend_pools_send_receive_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck">enforce_backend_pools_certificate_name_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_pools_send_receive_timeout_seconds_input`<sup>Optional</sup> <a name="backend_pools_send_receive_timeout_seconds_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput"></a>

```python
backend_pools_send_receive_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_backend_pools_certificate_name_check_input`<sup>Optional</sup> <a name="enforce_backend_pools_certificate_name_check_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput"></a>

```python
enforce_backend_pools_certificate_name_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend_pools_send_receive_timeout_seconds`<sup>Required</sup> <a name="backend_pools_send_receive_timeout_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```python
backend_pools_send_receive_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_backend_pools_certificate_name_check`<sup>Required</sup> <a name="enforce_backend_pools_certificate_name_check" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck"></a>

```python
enforce_backend_pools_certificate_name_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorBackendPoolSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>]

---


### FrontdoorExplicitResourceOrderList <a name="FrontdoorExplicitResourceOrderList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorExplicitResourceOrderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorExplicitResourceOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FrontdoorExplicitResourceOrderOutputReference <a name="FrontdoorExplicitResourceOrderOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorExplicitResourceOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds">backend_pool_health_probe_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds">backend_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds">backend_pool_load_balancing_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds">frontend_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds">routing_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_pool_health_probe_ids`<sup>Required</sup> <a name="backend_pool_health_probe_ids" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds"></a>

```python
backend_pool_health_probe_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_pool_ids`<sup>Required</sup> <a name="backend_pool_ids" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds"></a>

```python
backend_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_pool_load_balancing_ids`<sup>Required</sup> <a name="backend_pool_load_balancing_ids" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds"></a>

```python
backend_pool_load_balancing_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `frontend_endpoint_ids`<sup>Required</sup> <a name="frontend_endpoint_ids" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds"></a>

```python
frontend_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `routing_rule_ids`<sup>Required</sup> <a name="routing_rule_ids" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds"></a>

```python
routing_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue"></a>

```python
internal_value: FrontdoorExplicitResourceOrder
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a>

---


### FrontdoorFrontendEndpointList <a name="FrontdoorFrontendEndpointList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorFrontendEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFrontendEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFrontendEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]]

---


### FrontdoorFrontendEndpointOutputReference <a name="FrontdoorFrontendEndpointOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorFrontendEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled">reset_session_affinity_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds">reset_session_affinity_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId">reset_web_application_firewall_policy_link_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_session_affinity_enabled` <a name="reset_session_affinity_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled"></a>

```python
def reset_session_affinity_enabled() -> None
```

##### `reset_session_affinity_ttl_seconds` <a name="reset_session_affinity_ttl_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds"></a>

```python
def reset_session_affinity_ttl_seconds() -> None
```

##### `reset_web_application_firewall_policy_link_id` <a name="reset_web_application_firewall_policy_link_id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId"></a>

```python
def reset_web_application_firewall_policy_link_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput">session_affinity_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput">session_affinity_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput">web_application_firewall_policy_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled">session_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds">session_affinity_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId">web_application_firewall_policy_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `session_affinity_enabled_input`<sup>Optional</sup> <a name="session_affinity_enabled_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput"></a>

```python
session_affinity_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_affinity_ttl_seconds_input`<sup>Optional</sup> <a name="session_affinity_ttl_seconds_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput"></a>

```python
session_affinity_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_application_firewall_policy_link_id_input`<sup>Optional</sup> <a name="web_application_firewall_policy_link_id_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput"></a>

```python
web_application_firewall_policy_link_id_input: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `session_affinity_enabled`<sup>Required</sup> <a name="session_affinity_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled"></a>

```python
session_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_affinity_ttl_seconds`<sup>Required</sup> <a name="session_affinity_ttl_seconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds"></a>

```python
session_affinity_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_application_firewall_policy_link_id`<sup>Required</sup> <a name="web_application_firewall_policy_link_id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId"></a>

```python
web_application_firewall_policy_link_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFrontendEndpoint]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>]

---


### FrontdoorRoutingRuleForwardingConfigurationOutputReference <a name="FrontdoorRoutingRuleForwardingConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration">reset_cache_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled">reset_cache_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters">reset_cache_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective">reset_cache_query_parameter_strip_directive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression">reset_cache_use_dynamic_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath">reset_custom_forwarding_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol">reset_forwarding_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_duration` <a name="reset_cache_duration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration"></a>

```python
def reset_cache_duration() -> None
```

##### `reset_cache_enabled` <a name="reset_cache_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled"></a>

```python
def reset_cache_enabled() -> None
```

##### `reset_cache_query_parameters` <a name="reset_cache_query_parameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters"></a>

```python
def reset_cache_query_parameters() -> None
```

##### `reset_cache_query_parameter_strip_directive` <a name="reset_cache_query_parameter_strip_directive" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective"></a>

```python
def reset_cache_query_parameter_strip_directive() -> None
```

##### `reset_cache_use_dynamic_compression` <a name="reset_cache_use_dynamic_compression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression"></a>

```python
def reset_cache_use_dynamic_compression() -> None
```

##### `reset_custom_forwarding_path` <a name="reset_custom_forwarding_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath"></a>

```python
def reset_custom_forwarding_path() -> None
```

##### `reset_forwarding_protocol` <a name="reset_forwarding_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol"></a>

```python
def reset_forwarding_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput">backend_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput">cache_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput">cache_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput">cache_query_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput">cache_query_parameter_strip_directive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput">cache_use_dynamic_compression_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput">custom_forwarding_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput">forwarding_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName">backend_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration">cache_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled">cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters">cache_query_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective">cache_query_parameter_strip_directive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression">cache_use_dynamic_compression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath">custom_forwarding_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol">forwarding_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_pool_name_input`<sup>Optional</sup> <a name="backend_pool_name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput"></a>

```python
backend_pool_name_input: str
```

- *Type:* str

---

##### `cache_duration_input`<sup>Optional</sup> <a name="cache_duration_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput"></a>

```python
cache_duration_input: str
```

- *Type:* str

---

##### `cache_enabled_input`<sup>Optional</sup> <a name="cache_enabled_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput"></a>

```python
cache_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_query_parameters_input`<sup>Optional</sup> <a name="cache_query_parameters_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput"></a>

```python
cache_query_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_query_parameter_strip_directive_input`<sup>Optional</sup> <a name="cache_query_parameter_strip_directive_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput"></a>

```python
cache_query_parameter_strip_directive_input: str
```

- *Type:* str

---

##### `cache_use_dynamic_compression_input`<sup>Optional</sup> <a name="cache_use_dynamic_compression_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput"></a>

```python
cache_use_dynamic_compression_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_forwarding_path_input`<sup>Optional</sup> <a name="custom_forwarding_path_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput"></a>

```python
custom_forwarding_path_input: str
```

- *Type:* str

---

##### `forwarding_protocol_input`<sup>Optional</sup> <a name="forwarding_protocol_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput"></a>

```python
forwarding_protocol_input: str
```

- *Type:* str

---

##### `backend_pool_name`<sup>Required</sup> <a name="backend_pool_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName"></a>

```python
backend_pool_name: str
```

- *Type:* str

---

##### `cache_duration`<sup>Required</sup> <a name="cache_duration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration"></a>

```python
cache_duration: str
```

- *Type:* str

---

##### `cache_enabled`<sup>Required</sup> <a name="cache_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled"></a>

```python
cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_query_parameters`<sup>Required</sup> <a name="cache_query_parameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters"></a>

```python
cache_query_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_query_parameter_strip_directive`<sup>Required</sup> <a name="cache_query_parameter_strip_directive" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective"></a>

```python
cache_query_parameter_strip_directive: str
```

- *Type:* str

---

##### `cache_use_dynamic_compression`<sup>Required</sup> <a name="cache_use_dynamic_compression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression"></a>

```python
cache_use_dynamic_compression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_forwarding_path`<sup>Required</sup> <a name="custom_forwarding_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath"></a>

```python
custom_forwarding_path: str
```

- *Type:* str

---

##### `forwarding_protocol`<sup>Required</sup> <a name="forwarding_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol"></a>

```python
forwarding_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FrontdoorRoutingRuleForwardingConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---


### FrontdoorRoutingRuleList <a name="FrontdoorRoutingRuleList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorRoutingRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorRoutingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorRoutingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]]

---


### FrontdoorRoutingRuleOutputReference <a name="FrontdoorRoutingRuleOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorRoutingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration">put_forwarding_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration">put_redirect_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration">reset_forwarding_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration">reset_redirect_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_forwarding_configuration` <a name="put_forwarding_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration"></a>

```python
def put_forwarding_configuration(
  backend_pool_name: str,
  cache_duration: str = None,
  cache_enabled: typing.Union[bool, IResolvable] = None,
  cache_query_parameters: typing.List[str] = None,
  cache_query_parameter_strip_directive: str = None,
  cache_use_dynamic_compression: typing.Union[bool, IResolvable] = None,
  custom_forwarding_path: str = None,
  forwarding_protocol: str = None
) -> None
```

###### `backend_pool_name`<sup>Required</sup> <a name="backend_pool_name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.backendPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}.

---

###### `cache_duration`<sup>Optional</sup> <a name="cache_duration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.cacheDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}.

---

###### `cache_enabled`<sup>Optional</sup> <a name="cache_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.cacheEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}.

---

###### `cache_query_parameters`<sup>Optional</sup> <a name="cache_query_parameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.cacheQueryParameters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}.

---

###### `cache_query_parameter_strip_directive`<sup>Optional</sup> <a name="cache_query_parameter_strip_directive" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.cacheQueryParameterStripDirective"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}.

---

###### `cache_use_dynamic_compression`<sup>Optional</sup> <a name="cache_use_dynamic_compression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.cacheUseDynamicCompression"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}.

---

###### `custom_forwarding_path`<sup>Optional</sup> <a name="custom_forwarding_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.customForwardingPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}.

---

###### `forwarding_protocol`<sup>Optional</sup> <a name="forwarding_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.forwardingProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}.

---

##### `put_redirect_configuration` <a name="put_redirect_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration"></a>

```python
def put_redirect_configuration(
  redirect_protocol: str,
  redirect_type: str,
  custom_fragment: str = None,
  custom_host: str = None,
  custom_path: str = None,
  custom_query_string: str = None
) -> None
```

###### `redirect_protocol`<sup>Required</sup> <a name="redirect_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.redirectProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}.

---

###### `redirect_type`<sup>Required</sup> <a name="redirect_type" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.redirectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}.

---

###### `custom_fragment`<sup>Optional</sup> <a name="custom_fragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.customFragment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}.

---

###### `custom_host`<sup>Optional</sup> <a name="custom_host" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.customHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}.

---

###### `custom_path`<sup>Optional</sup> <a name="custom_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.customPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}.

---

###### `custom_query_string`<sup>Optional</sup> <a name="custom_query_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.customQueryString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_forwarding_configuration` <a name="reset_forwarding_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration"></a>

```python
def reset_forwarding_configuration() -> None
```

##### `reset_redirect_configuration` <a name="reset_redirect_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration"></a>

```python
def reset_redirect_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration">forwarding_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration">redirect_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput">accepted_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput">forwarding_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput">frontend_endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput">patterns_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput">redirect_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols">accepted_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints">frontend_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch">patterns_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarding_configuration`<sup>Required</sup> <a name="forwarding_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration"></a>

```python
forwarding_configuration: FrontdoorRoutingRuleForwardingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `redirect_configuration`<sup>Required</sup> <a name="redirect_configuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration"></a>

```python
redirect_configuration: FrontdoorRoutingRuleRedirectConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a>

---

##### `accepted_protocols_input`<sup>Optional</sup> <a name="accepted_protocols_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput"></a>

```python
accepted_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarding_configuration_input`<sup>Optional</sup> <a name="forwarding_configuration_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput"></a>

```python
forwarding_configuration_input: FrontdoorRoutingRuleForwardingConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `frontend_endpoints_input`<sup>Optional</sup> <a name="frontend_endpoints_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput"></a>

```python
frontend_endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `patterns_to_match_input`<sup>Optional</sup> <a name="patterns_to_match_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput"></a>

```python
patterns_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_configuration_input`<sup>Optional</sup> <a name="redirect_configuration_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput"></a>

```python
redirect_configuration_input: FrontdoorRoutingRuleRedirectConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `accepted_protocols`<sup>Required</sup> <a name="accepted_protocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols"></a>

```python
accepted_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_endpoints`<sup>Required</sup> <a name="frontend_endpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints"></a>

```python
frontend_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `patterns_to_match`<sup>Required</sup> <a name="patterns_to_match" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch"></a>

```python
patterns_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorRoutingRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>]

---


### FrontdoorRoutingRuleRedirectConfigurationOutputReference <a name="FrontdoorRoutingRuleRedirectConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment">reset_custom_fragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost">reset_custom_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath">reset_custom_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString">reset_custom_query_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_fragment` <a name="reset_custom_fragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment"></a>

```python
def reset_custom_fragment() -> None
```

##### `reset_custom_host` <a name="reset_custom_host" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost"></a>

```python
def reset_custom_host() -> None
```

##### `reset_custom_path` <a name="reset_custom_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath"></a>

```python
def reset_custom_path() -> None
```

##### `reset_custom_query_string` <a name="reset_custom_query_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString"></a>

```python
def reset_custom_query_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput">custom_fragment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput">custom_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput">custom_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput">custom_query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput">redirect_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput">redirect_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment">custom_fragment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost">custom_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath">custom_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString">custom_query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol">redirect_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType">redirect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_fragment_input`<sup>Optional</sup> <a name="custom_fragment_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput"></a>

```python
custom_fragment_input: str
```

- *Type:* str

---

##### `custom_host_input`<sup>Optional</sup> <a name="custom_host_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput"></a>

```python
custom_host_input: str
```

- *Type:* str

---

##### `custom_path_input`<sup>Optional</sup> <a name="custom_path_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput"></a>

```python
custom_path_input: str
```

- *Type:* str

---

##### `custom_query_string_input`<sup>Optional</sup> <a name="custom_query_string_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput"></a>

```python
custom_query_string_input: str
```

- *Type:* str

---

##### `redirect_protocol_input`<sup>Optional</sup> <a name="redirect_protocol_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput"></a>

```python
redirect_protocol_input: str
```

- *Type:* str

---

##### `redirect_type_input`<sup>Optional</sup> <a name="redirect_type_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput"></a>

```python
redirect_type_input: str
```

- *Type:* str

---

##### `custom_fragment`<sup>Required</sup> <a name="custom_fragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment"></a>

```python
custom_fragment: str
```

- *Type:* str

---

##### `custom_host`<sup>Required</sup> <a name="custom_host" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost"></a>

```python
custom_host: str
```

- *Type:* str

---

##### `custom_path`<sup>Required</sup> <a name="custom_path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath"></a>

```python
custom_path: str
```

- *Type:* str

---

##### `custom_query_string`<sup>Required</sup> <a name="custom_query_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString"></a>

```python
custom_query_string: str
```

- *Type:* str

---

##### `redirect_protocol`<sup>Required</sup> <a name="redirect_protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol"></a>

```python
redirect_protocol: str
```

- *Type:* str

---

##### `redirect_type`<sup>Required</sup> <a name="redirect_type" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType"></a>

```python
redirect_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FrontdoorRoutingRuleRedirectConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---


### FrontdoorTimeoutsOutputReference <a name="FrontdoorTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor

frontdoor.FrontdoorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>]

---



