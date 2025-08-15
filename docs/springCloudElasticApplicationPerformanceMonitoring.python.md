# `springCloudElasticApplicationPerformanceMonitoring` Submodule <a name="`springCloudElasticApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudElasticApplicationPerformanceMonitoring <a name="SpringCloudElasticApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring azurerm_spring_cloud_elastic_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_packages: typing.List[str],
  name: str,
  server_url: str,
  service_name: str,
  spring_cloud_service_id: str,
  globally_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: SpringCloudElasticApplicationPerformanceMonitoringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.applicationPackages">application_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serverUrl">server_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_packages`<sup>Required</sup> <a name="application_packages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.applicationPackages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}.

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serverUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `globally_enabled`<sup>Optional</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#timeouts SpringCloudElasticApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetGloballyEnabled">reset_globally_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#create SpringCloudElasticApplicationPerformanceMonitoring#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#delete SpringCloudElasticApplicationPerformanceMonitoring#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#read SpringCloudElasticApplicationPerformanceMonitoring#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#update SpringCloudElasticApplicationPerformanceMonitoring#update}.

---

##### `reset_globally_enabled` <a name="reset_globally_enabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```python
def reset_globally_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudElasticApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudElasticApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudElasticApplicationPerformanceMonitoring to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudElasticApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudElasticApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackagesInput">application_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabledInput">globally_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrlInput">server_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceIdInput">spring_cloud_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackages">application_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrl">server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeouts"></a>

```python
timeouts: SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `application_packages_input`<sup>Optional</sup> <a name="application_packages_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackagesInput"></a>

```python
application_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `globally_enabled_input`<sup>Optional</sup> <a name="globally_enabled_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```python
globally_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `server_url_input`<sup>Optional</sup> <a name="server_url_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrlInput"></a>

```python
server_url_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `spring_cloud_service_id_input`<sup>Optional</sup> <a name="spring_cloud_service_id_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```python
spring_cloud_service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudElasticApplicationPerformanceMonitoringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>]

---

##### `application_packages`<sup>Required</sup> <a name="application_packages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackages"></a>

```python
application_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `globally_enabled`<sup>Required</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```python
globally_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudElasticApplicationPerformanceMonitoringConfig <a name="SpringCloudElasticApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_packages: typing.List[str],
  name: str,
  server_url: str,
  service_name: str,
  spring_cloud_service_id: str,
  globally_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: SpringCloudElasticApplicationPerformanceMonitoringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.applicationPackages">application_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serverUrl">server_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_packages`<sup>Required</sup> <a name="application_packages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.applicationPackages"></a>

```python
application_packages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}.

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `globally_enabled`<sup>Optional</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```python
globally_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```python
timeouts: SpringCloudElasticApplicationPerformanceMonitoringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#timeouts SpringCloudElasticApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudElasticApplicationPerformanceMonitoringTimeouts <a name="SpringCloudElasticApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#create SpringCloudElasticApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#delete SpringCloudElasticApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#read SpringCloudElasticApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#update SpringCloudElasticApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#create SpringCloudElasticApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#delete SpringCloudElasticApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#read SpringCloudElasticApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#update SpringCloudElasticApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_elastic_application_performance_monitoring

springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudElasticApplicationPerformanceMonitoringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>]

---



