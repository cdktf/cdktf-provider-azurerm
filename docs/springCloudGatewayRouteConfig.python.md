# `springCloudGatewayRouteConfig` Submodule <a name="`springCloudGatewayRouteConfig` Submodule" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGatewayRouteConfig <a name="SpringCloudGatewayRouteConfig" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config azurerm_spring_cloud_gateway_route_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig(
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
  protocol: str,
  spring_cloud_gateway_id: str,
  filters: typing.List[str] = None,
  id: str = None,
  open_api: SpringCloudGatewayRouteConfigOpenApi = None,
  predicates: typing.List[str] = None,
  route: typing.Union[IResolvable, typing.List[SpringCloudGatewayRouteConfigRoute]] = None,
  spring_cloud_app_id: str = None,
  sso_validation_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: SpringCloudGatewayRouteConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#name SpringCloudGatewayRouteConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#protocol SpringCloudGatewayRouteConfig#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.springCloudGatewayId">spring_cloud_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_gateway_id SpringCloudGatewayRouteConfig#spring_cloud_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.filters">filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#id SpringCloudGatewayRouteConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.openApi">open_api</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a></code> | open_api block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.predicates">predicates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.route">route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]</code> | route block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_app_id SpringCloudGatewayRouteConfig#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.ssoValidationEnabled">sso_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#name SpringCloudGatewayRouteConfig#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#protocol SpringCloudGatewayRouteConfig#protocol}.

---

##### `spring_cloud_gateway_id`<sup>Required</sup> <a name="spring_cloud_gateway_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.springCloudGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_gateway_id SpringCloudGatewayRouteConfig#spring_cloud_gateway_id}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.filters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#id SpringCloudGatewayRouteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api`<sup>Optional</sup> <a name="open_api" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.openApi"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

open_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#open_api SpringCloudGatewayRouteConfig#open_api}

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.predicates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.route"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#route SpringCloudGatewayRouteConfig#route}

---

##### `spring_cloud_app_id`<sup>Optional</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.springCloudAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_app_id SpringCloudGatewayRouteConfig#spring_cloud_app_id}.

---

##### `sso_validation_enabled`<sup>Optional</sup> <a name="sso_validation_enabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.ssoValidationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#timeouts SpringCloudGatewayRouteConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putOpenApi">put_open_api</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putRoute">put_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOpenApi">reset_open_api</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetPredicates">reset_predicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetRoute">reset_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSpringCloudAppId">reset_spring_cloud_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSsoValidationEnabled">reset_sso_validation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_open_api` <a name="put_open_api" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putOpenApi"></a>

```python
def put_open_api(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putOpenApi.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}.

---

##### `put_route` <a name="put_route" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putRoute"></a>

```python
def put_route(
  value: typing.Union[IResolvable, typing.List[SpringCloudGatewayRouteConfigRoute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putRoute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#create SpringCloudGatewayRouteConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#delete SpringCloudGatewayRouteConfig#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#read SpringCloudGatewayRouteConfig#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#update SpringCloudGatewayRouteConfig#update}.

---

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_open_api` <a name="reset_open_api" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOpenApi"></a>

```python
def reset_open_api() -> None
```

##### `reset_predicates` <a name="reset_predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetPredicates"></a>

```python
def reset_predicates() -> None
```

##### `reset_route` <a name="reset_route" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetRoute"></a>

```python
def reset_route() -> None
```

##### `reset_spring_cloud_app_id` <a name="reset_spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSpringCloudAppId"></a>

```python
def reset_spring_cloud_app_id() -> None
```

##### `reset_sso_validation_enabled` <a name="reset_sso_validation_enabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSsoValidationEnabled"></a>

```python
def reset_sso_validation_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudGatewayRouteConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudGatewayRouteConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudGatewayRouteConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudGatewayRouteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudGatewayRouteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApi">open_api</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference">SpringCloudGatewayRouteConfigOpenApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList">SpringCloudGatewayRouteConfigRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference">SpringCloudGatewayRouteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filtersInput">filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApiInput">open_api_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicatesInput">predicates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.routeInput">route_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppIdInput">spring_cloud_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayIdInput">spring_cloud_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabledInput">sso_validation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filters">filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicates">predicates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayId">spring_cloud_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabled">sso_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `open_api`<sup>Required</sup> <a name="open_api" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApi"></a>

```python
open_api: SpringCloudGatewayRouteConfigOpenApiOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference">SpringCloudGatewayRouteConfigOpenApiOutputReference</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.route"></a>

```python
route: SpringCloudGatewayRouteConfigRouteList
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList">SpringCloudGatewayRouteConfigRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeouts"></a>

```python
timeouts: SpringCloudGatewayRouteConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference">SpringCloudGatewayRouteConfigTimeoutsOutputReference</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filtersInput"></a>

```python
filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `open_api_input`<sup>Optional</sup> <a name="open_api_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApiInput"></a>

```python
open_api_input: SpringCloudGatewayRouteConfigOpenApi
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

---

##### `predicates_input`<sup>Optional</sup> <a name="predicates_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicatesInput"></a>

```python
predicates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.routeInput"></a>

```python
route_input: typing.Union[IResolvable, typing.List[SpringCloudGatewayRouteConfigRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]

---

##### `spring_cloud_app_id_input`<sup>Optional</sup> <a name="spring_cloud_app_id_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppIdInput"></a>

```python
spring_cloud_app_id_input: str
```

- *Type:* str

---

##### `spring_cloud_gateway_id_input`<sup>Optional</sup> <a name="spring_cloud_gateway_id_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayIdInput"></a>

```python
spring_cloud_gateway_id_input: str
```

- *Type:* str

---

##### `sso_validation_enabled_input`<sup>Optional</sup> <a name="sso_validation_enabled_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabledInput"></a>

```python
sso_validation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudGatewayRouteConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicates"></a>

```python
predicates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `spring_cloud_app_id`<sup>Required</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppId"></a>

```python
spring_cloud_app_id: str
```

- *Type:* str

---

##### `spring_cloud_gateway_id`<sup>Required</sup> <a name="spring_cloud_gateway_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayId"></a>

```python
spring_cloud_gateway_id: str
```

- *Type:* str

---

##### `sso_validation_enabled`<sup>Required</sup> <a name="sso_validation_enabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabled"></a>

```python
sso_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayRouteConfigConfig <a name="SpringCloudGatewayRouteConfigConfig" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  protocol: str,
  spring_cloud_gateway_id: str,
  filters: typing.List[str] = None,
  id: str = None,
  open_api: SpringCloudGatewayRouteConfigOpenApi = None,
  predicates: typing.List[str] = None,
  route: typing.Union[IResolvable, typing.List[SpringCloudGatewayRouteConfigRoute]] = None,
  spring_cloud_app_id: str = None,
  sso_validation_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: SpringCloudGatewayRouteConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#name SpringCloudGatewayRouteConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#protocol SpringCloudGatewayRouteConfig#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudGatewayId">spring_cloud_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_gateway_id SpringCloudGatewayRouteConfig#spring_cloud_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.filters">filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#id SpringCloudGatewayRouteConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.openApi">open_api</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a></code> | open_api block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.predicates">predicates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.route">route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]</code> | route block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_app_id SpringCloudGatewayRouteConfig#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.ssoValidationEnabled">sso_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#name SpringCloudGatewayRouteConfig#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#protocol SpringCloudGatewayRouteConfig#protocol}.

---

##### `spring_cloud_gateway_id`<sup>Required</sup> <a name="spring_cloud_gateway_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudGatewayId"></a>

```python
spring_cloud_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_gateway_id SpringCloudGatewayRouteConfig#spring_cloud_gateway_id}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#id SpringCloudGatewayRouteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api`<sup>Optional</sup> <a name="open_api" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.openApi"></a>

```python
open_api: SpringCloudGatewayRouteConfigOpenApi
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

open_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#open_api SpringCloudGatewayRouteConfig#open_api}

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.predicates"></a>

```python
predicates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.route"></a>

```python
route: typing.Union[IResolvable, typing.List[SpringCloudGatewayRouteConfigRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#route SpringCloudGatewayRouteConfig#route}

---

##### `spring_cloud_app_id`<sup>Optional</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudAppId"></a>

```python
spring_cloud_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_app_id SpringCloudGatewayRouteConfig#spring_cloud_app_id}.

---

##### `sso_validation_enabled`<sup>Optional</sup> <a name="sso_validation_enabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.ssoValidationEnabled"></a>

```python
sso_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.timeouts"></a>

```python
timeouts: SpringCloudGatewayRouteConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#timeouts SpringCloudGatewayRouteConfig#timeouts}

---

### SpringCloudGatewayRouteConfigOpenApi <a name="SpringCloudGatewayRouteConfigOpenApi" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}.

---

### SpringCloudGatewayRouteConfigRoute <a name="SpringCloudGatewayRouteConfigRoute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute(
  order: typing.Union[int, float],
  classification_tags: typing.List[str] = None,
  description: str = None,
  filters: typing.List[str] = None,
  predicates: typing.List[str] = None,
  sso_validation_enabled: typing.Union[bool, IResolvable] = None,
  title: str = None,
  token_relay: typing.Union[bool, IResolvable] = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#order SpringCloudGatewayRouteConfig#order}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.classificationTags">classification_tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#classification_tags SpringCloudGatewayRouteConfig#classification_tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#description SpringCloudGatewayRouteConfig#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.filters">filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.predicates">predicates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.ssoValidationEnabled">sso_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#title SpringCloudGatewayRouteConfig#title}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.tokenRelay">token_relay</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#token_relay SpringCloudGatewayRouteConfig#token_relay}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}. |

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#order SpringCloudGatewayRouteConfig#order}.

---

##### `classification_tags`<sup>Optional</sup> <a name="classification_tags" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.classificationTags"></a>

```python
classification_tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#classification_tags SpringCloudGatewayRouteConfig#classification_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#description SpringCloudGatewayRouteConfig#description}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}.

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.predicates"></a>

```python
predicates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}.

---

##### `sso_validation_enabled`<sup>Optional</sup> <a name="sso_validation_enabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.ssoValidationEnabled"></a>

```python
sso_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#title SpringCloudGatewayRouteConfig#title}.

---

##### `token_relay`<sup>Optional</sup> <a name="token_relay" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.tokenRelay"></a>

```python
token_relay: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#token_relay SpringCloudGatewayRouteConfig#token_relay}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}.

---

### SpringCloudGatewayRouteConfigTimeouts <a name="SpringCloudGatewayRouteConfigTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#create SpringCloudGatewayRouteConfig#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#delete SpringCloudGatewayRouteConfig#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#read SpringCloudGatewayRouteConfig#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#update SpringCloudGatewayRouteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#create SpringCloudGatewayRouteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#delete SpringCloudGatewayRouteConfig#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#read SpringCloudGatewayRouteConfig#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/spring_cloud_gateway_route_config#update SpringCloudGatewayRouteConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayRouteConfigOpenApiOutputReference <a name="SpringCloudGatewayRouteConfigOpenApiOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewayRouteConfigOpenApi
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

---


### SpringCloudGatewayRouteConfigRouteList <a name="SpringCloudGatewayRouteConfigRouteList" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpringCloudGatewayRouteConfigRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpringCloudGatewayRouteConfigRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]]

---


### SpringCloudGatewayRouteConfigRouteOutputReference <a name="SpringCloudGatewayRouteConfigRouteOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetClassificationTags">reset_classification_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetPredicates">reset_predicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetSsoValidationEnabled">reset_sso_validation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTokenRelay">reset_token_relay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification_tags` <a name="reset_classification_tags" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetClassificationTags"></a>

```python
def reset_classification_tags() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_predicates` <a name="reset_predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetPredicates"></a>

```python
def reset_predicates() -> None
```

##### `reset_sso_validation_enabled` <a name="reset_sso_validation_enabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetSsoValidationEnabled"></a>

```python
def reset_sso_validation_enabled() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_token_relay` <a name="reset_token_relay" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTokenRelay"></a>

```python
def reset_token_relay() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTagsInput">classification_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filtersInput">filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicatesInput">predicates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabledInput">sso_validation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelayInput">token_relay_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTags">classification_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filters">filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicates">predicates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabled">sso_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelay">token_relay</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_tags_input`<sup>Optional</sup> <a name="classification_tags_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTagsInput"></a>

```python
classification_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filtersInput"></a>

```python
filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predicates_input`<sup>Optional</sup> <a name="predicates_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicatesInput"></a>

```python
predicates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sso_validation_enabled_input`<sup>Optional</sup> <a name="sso_validation_enabled_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabledInput"></a>

```python
sso_validation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `token_relay_input`<sup>Optional</sup> <a name="token_relay_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelayInput"></a>

```python
token_relay_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `classification_tags`<sup>Required</sup> <a name="classification_tags" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTags"></a>

```python
classification_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicates"></a>

```python
predicates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sso_validation_enabled`<sup>Required</sup> <a name="sso_validation_enabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabled"></a>

```python
sso_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `token_relay`<sup>Required</sup> <a name="token_relay" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelay"></a>

```python
token_relay: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudGatewayRouteConfigRoute]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>]

---


### SpringCloudGatewayRouteConfigTimeoutsOutputReference <a name="SpringCloudGatewayRouteConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway_route_config

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudGatewayRouteConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>]

---



