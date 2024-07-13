# `springCloudGateway` Submodule <a name="`springCloudGateway` Submodule" id="@cdktf/provider-azurerm.springCloudGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGateway <a name="SpringCloudGateway" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway azurerm_spring_cloud_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGateway(
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
  spring_cloud_service_id: str,
  api_metadata: SpringCloudGatewayApiMetadata = None,
  application_performance_monitoring_ids: typing.List[str] = None,
  application_performance_monitoring_types: typing.List[str] = None,
  client_authorization: SpringCloudGatewayClientAuthorization = None,
  cors: SpringCloudGatewayCors = None,
  environment_variables: typing.Mapping[str] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  local_response_cache_per_instance: SpringCloudGatewayLocalResponseCachePerInstance = None,
  local_response_cache_per_route: SpringCloudGatewayLocalResponseCachePerRoute = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  quota: SpringCloudGatewayQuota = None,
  sensitive_environment_variables: typing.Mapping[str] = None,
  sso: SpringCloudGatewaySso = None,
  timeouts: SpringCloudGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.apiMetadata">api_metadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | api_metadata block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.applicationPerformanceMonitoringIds">application_performance_monitoring_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.applicationPerformanceMonitoringTypes">application_performance_monitoring_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.clientAuthorization">client_authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | client_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.localResponseCachePerInstance">local_response_cache_per_instance</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | local_response_cache_per_instance block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.localResponseCachePerRoute">local_response_cache_per_route</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | local_response_cache_per_route block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sensitiveEnvironmentVariables">sensitive_environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.springCloudServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}.

---

##### `api_metadata`<sup>Optional</sup> <a name="api_metadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.apiMetadata"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

api_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#api_metadata SpringCloudGateway#api_metadata}

---

##### `application_performance_monitoring_ids`<sup>Optional</sup> <a name="application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.applicationPerformanceMonitoringIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}.

---

##### `application_performance_monitoring_types`<sup>Optional</sup> <a name="application_performance_monitoring_types" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.applicationPerformanceMonitoringTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}.

---

##### `client_authorization`<sup>Optional</sup> <a name="client_authorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.clientAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

client_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_authorization SpringCloudGateway#client_authorization}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#cors SpringCloudGateway#cors}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}.

---

##### `local_response_cache_per_instance`<sup>Optional</sup> <a name="local_response_cache_per_instance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.localResponseCachePerInstance"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

local_response_cache_per_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#local_response_cache_per_instance SpringCloudGateway#local_response_cache_per_instance}

---

##### `local_response_cache_per_route`<sup>Optional</sup> <a name="local_response_cache_per_route" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.localResponseCachePerRoute"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

local_response_cache_per_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#local_response_cache_per_route SpringCloudGateway#local_response_cache_per_route}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.quota"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#quota SpringCloudGateway#quota}

---

##### `sensitive_environment_variables`<sup>Optional</sup> <a name="sensitive_environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sensitiveEnvironmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sso"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#sso SpringCloudGateway#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#timeouts SpringCloudGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata">put_api_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization">put_client_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance">put_local_response_cache_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute">put_local_response_cache_per_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso">put_sso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata">reset_api_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringIds">reset_application_performance_monitoring_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes">reset_application_performance_monitoring_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization">reset_client_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerInstance">reset_local_response_cache_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerRoute">reset_local_response_cache_per_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables">reset_sensitive_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso">reset_sso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api_metadata` <a name="put_api_metadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata"></a>

```python
def put_api_metadata(
  description: str = None,
  documentation_url: str = None,
  server_url: str = None,
  title: str = None,
  version: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}.

---

###### `documentation_url`<sup>Optional</sup> <a name="documentation_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.documentationUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}.

---

###### `server_url`<sup>Optional</sup> <a name="server_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.serverUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}.

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}.

---

##### `put_client_authorization` <a name="put_client_authorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization"></a>

```python
def put_client_authorization(
  certificate_ids: typing.List[str] = None,
  verification_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `certificate_ids`<sup>Optional</sup> <a name="certificate_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization.parameter.certificateIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}.

---

###### `verification_enabled`<sup>Optional</sup> <a name="verification_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization.parameter.verificationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}.

---

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors"></a>

```python
def put_cors(
  allowed_headers: typing.List[str] = None,
  allowed_methods: typing.List[str] = None,
  allowed_origin_patterns: typing.List[str] = None,
  allowed_origins: typing.List[str] = None,
  credentials_allowed: typing.Union[bool, IResolvable] = None,
  exposed_headers: typing.List[str] = None,
  max_age_seconds: typing.Union[int, float] = None
) -> None
```

###### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.allowedHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}.

---

###### `allowed_methods`<sup>Optional</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.allowedMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}.

---

###### `allowed_origin_patterns`<sup>Optional</sup> <a name="allowed_origin_patterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.allowedOriginPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}.

---

###### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}.

---

###### `credentials_allowed`<sup>Optional</sup> <a name="credentials_allowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.credentialsAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}.

---

###### `exposed_headers`<sup>Optional</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.exposedHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}.

---

###### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.maxAgeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}.

---

##### `put_local_response_cache_per_instance` <a name="put_local_response_cache_per_instance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance"></a>

```python
def put_local_response_cache_per_instance(
  size: str = None,
  time_to_live: str = None
) -> None
```

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

###### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance.parameter.timeToLive"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

##### `put_local_response_cache_per_route` <a name="put_local_response_cache_per_route" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute"></a>

```python
def put_local_response_cache_per_route(
  size: str = None,
  time_to_live: str = None
) -> None
```

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

###### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute.parameter.timeToLive"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota"></a>

```python
def put_quota(
  cpu: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota.parameter.cpu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}.

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}.

---

##### `put_sso` <a name="put_sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso"></a>

```python
def put_sso(
  client_id: str = None,
  client_secret: str = None,
  issuer_uri: str = None,
  scope: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}.

---

###### `issuer_uri`<sup>Optional</sup> <a name="issuer_uri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso.parameter.issuerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso.parameter.scope"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}.

---

##### `reset_api_metadata` <a name="reset_api_metadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata"></a>

```python
def reset_api_metadata() -> None
```

##### `reset_application_performance_monitoring_ids` <a name="reset_application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringIds"></a>

```python
def reset_application_performance_monitoring_ids() -> None
```

##### `reset_application_performance_monitoring_types` <a name="reset_application_performance_monitoring_types" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes"></a>

```python
def reset_application_performance_monitoring_types() -> None
```

##### `reset_client_authorization` <a name="reset_client_authorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization"></a>

```python
def reset_client_authorization() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_local_response_cache_per_instance` <a name="reset_local_response_cache_per_instance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerInstance"></a>

```python
def reset_local_response_cache_per_instance() -> None
```

##### `reset_local_response_cache_per_route` <a name="reset_local_response_cache_per_route" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerRoute"></a>

```python
def reset_local_response_cache_per_route() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_sensitive_environment_variables` <a name="reset_sensitive_environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables"></a>

```python
def reset_sensitive_environment_variables() -> None
```

##### `reset_sso` <a name="reset_sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso"></a>

```python
def reset_sso() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata">api_metadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization">client_authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstance">local_response_cache_per_instance</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference">SpringCloudGatewayLocalResponseCachePerInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRoute">local_response_cache_per_route</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference">SpringCloudGatewayLocalResponseCachePerRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput">api_metadata_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIdsInput">application_performance_monitoring_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput">application_performance_monitoring_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput">client_authorization_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstanceInput">local_response_cache_per_instance_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRouteInput">local_response_cache_per_route_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput">sensitive_environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput">spring_cloud_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput">sso_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIds">application_performance_monitoring_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes">application_performance_monitoring_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables">sensitive_environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_metadata`<sup>Required</sup> <a name="api_metadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata"></a>

```python
api_metadata: SpringCloudGatewayApiMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a>

---

##### `client_authorization`<sup>Required</sup> <a name="client_authorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization"></a>

```python
client_authorization: SpringCloudGatewayClientAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors"></a>

```python
cors: SpringCloudGatewayCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a>

---

##### `local_response_cache_per_instance`<sup>Required</sup> <a name="local_response_cache_per_instance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstance"></a>

```python
local_response_cache_per_instance: SpringCloudGatewayLocalResponseCachePerInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference">SpringCloudGatewayLocalResponseCachePerInstanceOutputReference</a>

---

##### `local_response_cache_per_route`<sup>Required</sup> <a name="local_response_cache_per_route" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRoute"></a>

```python
local_response_cache_per_route: SpringCloudGatewayLocalResponseCachePerRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference">SpringCloudGatewayLocalResponseCachePerRouteOutputReference</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota"></a>

```python
quota: SpringCloudGatewayQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a>

---

##### `sso`<sup>Required</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso"></a>

```python
sso: SpringCloudGatewaySsoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts"></a>

```python
timeouts: SpringCloudGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `api_metadata_input`<sup>Optional</sup> <a name="api_metadata_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput"></a>

```python
api_metadata_input: SpringCloudGatewayApiMetadata
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---

##### `application_performance_monitoring_ids_input`<sup>Optional</sup> <a name="application_performance_monitoring_ids_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIdsInput"></a>

```python
application_performance_monitoring_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_performance_monitoring_types_input`<sup>Optional</sup> <a name="application_performance_monitoring_types_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput"></a>

```python
application_performance_monitoring_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_authorization_input`<sup>Optional</sup> <a name="client_authorization_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput"></a>

```python
client_authorization_input: SpringCloudGatewayClientAuthorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput"></a>

```python
cors_input: SpringCloudGatewayCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_response_cache_per_instance_input`<sup>Optional</sup> <a name="local_response_cache_per_instance_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstanceInput"></a>

```python
local_response_cache_per_instance_input: SpringCloudGatewayLocalResponseCachePerInstance
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---

##### `local_response_cache_per_route_input`<sup>Optional</sup> <a name="local_response_cache_per_route_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRouteInput"></a>

```python
local_response_cache_per_route_input: SpringCloudGatewayLocalResponseCachePerRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput"></a>

```python
quota_input: SpringCloudGatewayQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---

##### `sensitive_environment_variables_input`<sup>Optional</sup> <a name="sensitive_environment_variables_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput"></a>

```python
sensitive_environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spring_cloud_service_id_input`<sup>Optional</sup> <a name="spring_cloud_service_id_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput"></a>

```python
spring_cloud_service_id_input: str
```

- *Type:* str

---

##### `sso_input`<sup>Optional</sup> <a name="sso_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput"></a>

```python
sso_input: SpringCloudGatewaySso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>]

---

##### `application_performance_monitoring_ids`<sup>Required</sup> <a name="application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIds"></a>

```python
application_performance_monitoring_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_performance_monitoring_types`<sup>Required</sup> <a name="application_performance_monitoring_types" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes"></a>

```python
application_performance_monitoring_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sensitive_environment_variables`<sup>Required</sup> <a name="sensitive_environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables"></a>

```python
sensitive_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayApiMetadata <a name="SpringCloudGatewayApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayApiMetadata(
  description: str = None,
  documentation_url: str = None,
  server_url: str = None,
  title: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl">documentation_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl">server_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}.

---

##### `documentation_url`<sup>Optional</sup> <a name="documentation_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl"></a>

```python
documentation_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}.

---

##### `server_url`<sup>Optional</sup> <a name="server_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}.

---

### SpringCloudGatewayClientAuthorization <a name="SpringCloudGatewayClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayClientAuthorization(
  certificate_ids: typing.List[str] = None,
  verification_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled">verification_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}. |

---

##### `certificate_ids`<sup>Optional</sup> <a name="certificate_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}.

---

##### `verification_enabled`<sup>Optional</sup> <a name="verification_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled"></a>

```python
verification_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}.

---

### SpringCloudGatewayConfig <a name="SpringCloudGatewayConfig" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  spring_cloud_service_id: str,
  api_metadata: SpringCloudGatewayApiMetadata = None,
  application_performance_monitoring_ids: typing.List[str] = None,
  application_performance_monitoring_types: typing.List[str] = None,
  client_authorization: SpringCloudGatewayClientAuthorization = None,
  cors: SpringCloudGatewayCors = None,
  environment_variables: typing.Mapping[str] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  local_response_cache_per_instance: SpringCloudGatewayLocalResponseCachePerInstance = None,
  local_response_cache_per_route: SpringCloudGatewayLocalResponseCachePerRoute = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  quota: SpringCloudGatewayQuota = None,
  sensitive_environment_variables: typing.Mapping[str] = None,
  sso: SpringCloudGatewaySso = None,
  timeouts: SpringCloudGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata">api_metadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | api_metadata block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringIds">application_performance_monitoring_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes">application_performance_monitoring_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization">client_authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | client_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerInstance">local_response_cache_per_instance</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | local_response_cache_per_instance block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerRoute">local_response_cache_per_route</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | local_response_cache_per_route block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables">sensitive_environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}.

---

##### `api_metadata`<sup>Optional</sup> <a name="api_metadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata"></a>

```python
api_metadata: SpringCloudGatewayApiMetadata
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

api_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#api_metadata SpringCloudGateway#api_metadata}

---

##### `application_performance_monitoring_ids`<sup>Optional</sup> <a name="application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringIds"></a>

```python
application_performance_monitoring_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}.

---

##### `application_performance_monitoring_types`<sup>Optional</sup> <a name="application_performance_monitoring_types" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes"></a>

```python
application_performance_monitoring_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}.

---

##### `client_authorization`<sup>Optional</sup> <a name="client_authorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization"></a>

```python
client_authorization: SpringCloudGatewayClientAuthorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

client_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_authorization SpringCloudGateway#client_authorization}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors"></a>

```python
cors: SpringCloudGatewayCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#cors SpringCloudGateway#cors}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}.

---

##### `local_response_cache_per_instance`<sup>Optional</sup> <a name="local_response_cache_per_instance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerInstance"></a>

```python
local_response_cache_per_instance: SpringCloudGatewayLocalResponseCachePerInstance
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

local_response_cache_per_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#local_response_cache_per_instance SpringCloudGateway#local_response_cache_per_instance}

---

##### `local_response_cache_per_route`<sup>Optional</sup> <a name="local_response_cache_per_route" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerRoute"></a>

```python
local_response_cache_per_route: SpringCloudGatewayLocalResponseCachePerRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

local_response_cache_per_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#local_response_cache_per_route SpringCloudGateway#local_response_cache_per_route}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota"></a>

```python
quota: SpringCloudGatewayQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#quota SpringCloudGateway#quota}

---

##### `sensitive_environment_variables`<sup>Optional</sup> <a name="sensitive_environment_variables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables"></a>

```python
sensitive_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso"></a>

```python
sso: SpringCloudGatewaySso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#sso SpringCloudGateway#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts"></a>

```python
timeouts: SpringCloudGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#timeouts SpringCloudGateway#timeouts}

---

### SpringCloudGatewayCors <a name="SpringCloudGatewayCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayCors(
  allowed_headers: typing.List[str] = None,
  allowed_methods: typing.List[str] = None,
  allowed_origin_patterns: typing.List[str] = None,
  allowed_origins: typing.List[str] = None,
  credentials_allowed: typing.Union[bool, IResolvable] = None,
  exposed_headers: typing.List[str] = None,
  max_age_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOriginPatterns">allowed_origin_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed">credentials_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}. |

---

##### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}.

---

##### `allowed_methods`<sup>Optional</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}.

---

##### `allowed_origin_patterns`<sup>Optional</sup> <a name="allowed_origin_patterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOriginPatterns"></a>

```python
allowed_origin_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}.

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}.

---

##### `credentials_allowed`<sup>Optional</sup> <a name="credentials_allowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed"></a>

```python
credentials_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}.

---

##### `exposed_headers`<sup>Optional</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}.

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}.

---

### SpringCloudGatewayLocalResponseCachePerInstance <a name="SpringCloudGatewayLocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance(
  size: str = None,
  time_to_live: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.timeToLive">time_to_live</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

##### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.timeToLive"></a>

```python
time_to_live: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

### SpringCloudGatewayLocalResponseCachePerRoute <a name="SpringCloudGatewayLocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute(
  size: str = None,
  time_to_live: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.timeToLive">time_to_live</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

##### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.timeToLive"></a>

```python
time_to_live: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

### SpringCloudGatewayQuota <a name="SpringCloudGatewayQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayQuota(
  cpu: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}.

---

### SpringCloudGatewaySso <a name="SpringCloudGatewaySso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewaySso(
  client_id: str = None,
  client_secret: str = None,
  issuer_uri: str = None,
  scope: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri">issuer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope">scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}.

---

##### `issuer_uri`<sup>Optional</sup> <a name="issuer_uri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}.

---

### SpringCloudGatewayTimeouts <a name="SpringCloudGatewayTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayApiMetadataOutputReference <a name="SpringCloudGatewayApiMetadataOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayApiMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl">reset_documentation_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl">reset_server_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_documentation_url` <a name="reset_documentation_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl"></a>

```python
def reset_documentation_url() -> None
```

##### `reset_server_url` <a name="reset_server_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl"></a>

```python
def reset_server_url() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput">documentation_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput">server_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl">documentation_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl">server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `documentation_url_input`<sup>Optional</sup> <a name="documentation_url_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput"></a>

```python
documentation_url_input: str
```

- *Type:* str

---

##### `server_url_input`<sup>Optional</sup> <a name="server_url_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput"></a>

```python
server_url_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `documentation_url`<sup>Required</sup> <a name="documentation_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl"></a>

```python
documentation_url: str
```

- *Type:* str

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewayApiMetadata
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---


### SpringCloudGatewayClientAuthorizationOutputReference <a name="SpringCloudGatewayClientAuthorizationOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds">reset_certificate_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled">reset_verification_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_ids` <a name="reset_certificate_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds"></a>

```python
def reset_certificate_ids() -> None
```

##### `reset_verification_enabled` <a name="reset_verification_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled"></a>

```python
def reset_verification_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput">certificate_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput">verification_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled">verification_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_ids_input`<sup>Optional</sup> <a name="certificate_ids_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput"></a>

```python
certificate_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verification_enabled_input`<sup>Optional</sup> <a name="verification_enabled_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput"></a>

```python
verification_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_ids`<sup>Required</sup> <a name="certificate_ids" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verification_enabled`<sup>Required</sup> <a name="verification_enabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled"></a>

```python
verification_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewayClientAuthorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---


### SpringCloudGatewayCorsOutputReference <a name="SpringCloudGatewayCorsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders">reset_allowed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods">reset_allowed_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOriginPatterns">reset_allowed_origin_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed">reset_credentials_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders">reset_exposed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_headers` <a name="reset_allowed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders"></a>

```python
def reset_allowed_headers() -> None
```

##### `reset_allowed_methods` <a name="reset_allowed_methods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods"></a>

```python
def reset_allowed_methods() -> None
```

##### `reset_allowed_origin_patterns` <a name="reset_allowed_origin_patterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOriginPatterns"></a>

```python
def reset_allowed_origin_patterns() -> None
```

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_credentials_allowed` <a name="reset_credentials_allowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed"></a>

```python
def reset_credentials_allowed() -> None
```

##### `reset_exposed_headers` <a name="reset_exposed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders"></a>

```python
def reset_exposed_headers() -> None
```

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatternsInput">allowed_origin_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput">credentials_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatterns">allowed_origin_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed">credentials_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origin_patterns_input`<sup>Optional</sup> <a name="allowed_origin_patterns_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatternsInput"></a>

```python
allowed_origin_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_allowed_input`<sup>Optional</sup> <a name="credentials_allowed_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput"></a>

```python
credentials_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origin_patterns`<sup>Required</sup> <a name="allowed_origin_patterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatterns"></a>

```python
allowed_origin_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_allowed`<sup>Required</sup> <a name="credentials_allowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed"></a>

```python
credentials_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewayCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---


### SpringCloudGatewayLocalResponseCachePerInstanceOutputReference <a name="SpringCloudGatewayLocalResponseCachePerInstanceOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetTimeToLive">reset_time_to_live</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size` <a name="reset_size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_time_to_live` <a name="reset_time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetTimeToLive"></a>

```python
def reset_time_to_live() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLiveInput">time_to_live_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLive">time_to_live</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `time_to_live_input`<sup>Optional</sup> <a name="time_to_live_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLiveInput"></a>

```python
time_to_live_input: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `time_to_live`<sup>Required</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLive"></a>

```python
time_to_live: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewayLocalResponseCachePerInstance
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---


### SpringCloudGatewayLocalResponseCachePerRouteOutputReference <a name="SpringCloudGatewayLocalResponseCachePerRouteOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetTimeToLive">reset_time_to_live</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size` <a name="reset_size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_time_to_live` <a name="reset_time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetTimeToLive"></a>

```python
def reset_time_to_live() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLiveInput">time_to_live_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLive">time_to_live</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `time_to_live_input`<sup>Optional</sup> <a name="time_to_live_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLiveInput"></a>

```python
time_to_live_input: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `time_to_live`<sup>Required</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLive"></a>

```python
time_to_live: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewayLocalResponseCachePerRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---


### SpringCloudGatewayQuotaOutputReference <a name="SpringCloudGatewayQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewayQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---


### SpringCloudGatewaySsoOutputReference <a name="SpringCloudGatewaySsoOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewaySsoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri">reset_issuer_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_issuer_uri` <a name="reset_issuer_uri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri"></a>

```python
def reset_issuer_uri() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput">scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput"></a>

```python
scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudGatewaySso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---


### SpringCloudGatewayTimeoutsOutputReference <a name="SpringCloudGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_gateway

springCloudGateway.SpringCloudGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>]

---



