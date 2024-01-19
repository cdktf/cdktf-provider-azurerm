# `springCloudContainerDeployment` Submodule <a name="`springCloudContainerDeployment` Submodule" id="@cdktf/provider-azurerm.springCloudContainerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudContainerDeployment <a name="SpringCloudContainerDeployment" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment azurerm_spring_cloud_container_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image: str,
  name: str,
  server: str,
  spring_cloud_app_id: str,
  addon_json: str = None,
  application_performance_monitoring_ids: typing.List[str] = None,
  arguments: typing.List[str] = None,
  commands: typing.List[str] = None,
  environment_variables: typing.Mapping[str] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  language_framework: str = None,
  quota: SpringCloudContainerDeploymentQuota = None,
  timeouts: SpringCloudContainerDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.addonJson">addon_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.applicationPerformanceMonitoringIds">application_performance_monitoring_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.commands">commands</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.languageFramework">language_framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}.

---

##### `spring_cloud_app_id`<sup>Required</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.springCloudAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}.

---

##### `addon_json`<sup>Optional</sup> <a name="addon_json" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.addonJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}.

---

##### `application_performance_monitoring_ids`<sup>Optional</sup> <a name="application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.applicationPerformanceMonitoringIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.arguments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.commands"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}.

---

##### `language_framework`<sup>Optional</sup> <a name="language_framework" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.languageFramework"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.quota"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#quota SpringCloudContainerDeployment#quota}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#timeouts SpringCloudContainerDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetAddonJson">reset_addon_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetApplicationPerformanceMonitoringIds">reset_application_performance_monitoring_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetCommands">reset_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetLanguageFramework">reset_language_framework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota"></a>

```python
def put_quota(
  cpu: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota.parameter.cpu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#cpu SpringCloudContainerDeployment#cpu}.

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#memory SpringCloudContainerDeployment#memory}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#create SpringCloudContainerDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#delete SpringCloudContainerDeployment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#read SpringCloudContainerDeployment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#update SpringCloudContainerDeployment#update}.

---

##### `reset_addon_json` <a name="reset_addon_json" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetAddonJson"></a>

```python
def reset_addon_json() -> None
```

##### `reset_application_performance_monitoring_ids` <a name="reset_application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetApplicationPerformanceMonitoringIds"></a>

```python
def reset_application_performance_monitoring_ids() -> None
```

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_commands` <a name="reset_commands" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetCommands"></a>

```python
def reset_commands() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_language_framework` <a name="reset_language_framework" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetLanguageFramework"></a>

```python
def reset_language_framework() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudContainerDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudContainerDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudContainerDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudContainerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudContainerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference">SpringCloudContainerDeploymentQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference">SpringCloudContainerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJsonInput">addon_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIdsInput">application_performance_monitoring_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.argumentsInput">arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commandsInput">commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFrameworkInput">language_framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppIdInput">spring_cloud_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJson">addon_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIds">application_performance_monitoring_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFramework">language_framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quota"></a>

```python
quota: SpringCloudContainerDeploymentQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference">SpringCloudContainerDeploymentQuotaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeouts"></a>

```python
timeouts: SpringCloudContainerDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference">SpringCloudContainerDeploymentTimeoutsOutputReference</a>

---

##### `addon_json_input`<sup>Optional</sup> <a name="addon_json_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJsonInput"></a>

```python
addon_json_input: str
```

- *Type:* str

---

##### `application_performance_monitoring_ids_input`<sup>Optional</sup> <a name="application_performance_monitoring_ids_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIdsInput"></a>

```python
application_performance_monitoring_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.argumentsInput"></a>

```python
arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `commands_input`<sup>Optional</sup> <a name="commands_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commandsInput"></a>

```python
commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `language_framework_input`<sup>Optional</sup> <a name="language_framework_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFrameworkInput"></a>

```python
language_framework_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quotaInput"></a>

```python
quota_input: SpringCloudContainerDeploymentQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `spring_cloud_app_id_input`<sup>Optional</sup> <a name="spring_cloud_app_id_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppIdInput"></a>

```python
spring_cloud_app_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudContainerDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>]

---

##### `addon_json`<sup>Required</sup> <a name="addon_json" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJson"></a>

```python
addon_json: str
```

- *Type:* str

---

##### `application_performance_monitoring_ids`<sup>Required</sup> <a name="application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIds"></a>

```python
application_performance_monitoring_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `language_framework`<sup>Required</sup> <a name="language_framework" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFramework"></a>

```python
language_framework: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `spring_cloud_app_id`<sup>Required</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppId"></a>

```python
spring_cloud_app_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudContainerDeploymentConfig <a name="SpringCloudContainerDeploymentConfig" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image: str,
  name: str,
  server: str,
  spring_cloud_app_id: str,
  addon_json: str = None,
  application_performance_monitoring_ids: typing.List[str] = None,
  arguments: typing.List[str] = None,
  commands: typing.List[str] = None,
  environment_variables: typing.Mapping[str] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  language_framework: str = None,
  quota: SpringCloudContainerDeploymentQuota = None,
  timeouts: SpringCloudContainerDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.addonJson">addon_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.applicationPerformanceMonitoringIds">application_performance_monitoring_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.commands">commands</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.languageFramework">language_framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}.

---

##### `spring_cloud_app_id`<sup>Required</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.springCloudAppId"></a>

```python
spring_cloud_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}.

---

##### `addon_json`<sup>Optional</sup> <a name="addon_json" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.addonJson"></a>

```python
addon_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}.

---

##### `application_performance_monitoring_ids`<sup>Optional</sup> <a name="application_performance_monitoring_ids" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.applicationPerformanceMonitoringIds"></a>

```python
application_performance_monitoring_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}.

---

##### `language_framework`<sup>Optional</sup> <a name="language_framework" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.languageFramework"></a>

```python
language_framework: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.quota"></a>

```python
quota: SpringCloudContainerDeploymentQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#quota SpringCloudContainerDeployment#quota}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.timeouts"></a>

```python
timeouts: SpringCloudContainerDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#timeouts SpringCloudContainerDeployment#timeouts}

---

### SpringCloudContainerDeploymentQuota <a name="SpringCloudContainerDeploymentQuota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeploymentQuota(
  cpu: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#cpu SpringCloudContainerDeployment#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#memory SpringCloudContainerDeployment#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#cpu SpringCloudContainerDeployment#cpu}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#memory SpringCloudContainerDeployment#memory}.

---

### SpringCloudContainerDeploymentTimeouts <a name="SpringCloudContainerDeploymentTimeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#create SpringCloudContainerDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#delete SpringCloudContainerDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#read SpringCloudContainerDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#update SpringCloudContainerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#create SpringCloudContainerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#delete SpringCloudContainerDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#read SpringCloudContainerDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_container_deployment#update SpringCloudContainerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudContainerDeploymentQuotaOutputReference <a name="SpringCloudContainerDeploymentQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudContainerDeploymentQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---


### SpringCloudContainerDeploymentTimeoutsOutputReference <a name="SpringCloudContainerDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_container_deployment

springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudContainerDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>]

---



