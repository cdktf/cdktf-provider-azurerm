# `containerAppJob` Submodule <a name="`containerAppJob` Submodule" id="@cdktf/provider-azurerm.containerAppJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppJob <a name="ContainerAppJob" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job azurerm_container_app_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_app_environment_id: str,
  location: str,
  name: str,
  replica_timeout_in_seconds: typing.Union[int, float],
  resource_group_name: str,
  template: ContainerAppJobTemplate,
  event_trigger_config: ContainerAppJobEventTriggerConfig = None,
  id: str = None,
  identity: ContainerAppJobIdentity = None,
  manual_trigger_config: ContainerAppJobManualTriggerConfig = None,
  registries: typing.Union[IResolvable, typing.List[ContainerAppJobRegistries]] = None,
  registry: typing.Union[IResolvable, typing.List[ContainerAppJobRegistry]] = None,
  replica_retry_limit: typing.Union[int, float] = None,
  schedule_trigger_config: ContainerAppJobScheduleTriggerConfig = None,
  secret: typing.Union[IResolvable, typing.List[ContainerAppJobSecret]] = None,
  secrets: typing.Union[IResolvable, typing.List[ContainerAppJobSecrets]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppJobTimeouts = None,
  workload_profile_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#location ContainerAppJob#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.replicaTimeoutInSeconds">replica_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.eventTriggerConfig">event_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | event_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#id ContainerAppJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.manualTriggerConfig">manual_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | manual_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.registries">registries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]</code> | registries block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.registry">registry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.replicaRetryLimit">replica_retry_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scheduleTriggerConfig">schedule_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | schedule_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.secrets">secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]</code> | secrets block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#tags ContainerAppJob#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.workloadProfileName">workload_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#location ContainerAppJob#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `replica_timeout_in_seconds`<sup>Required</sup> <a name="replica_timeout_in_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.replicaTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#template ContainerAppJob#template}

---

##### `event_trigger_config`<sup>Optional</sup> <a name="event_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.eventTriggerConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

event_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#event_trigger_config ContainerAppJob#event_trigger_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#id ContainerAppJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `manual_trigger_config`<sup>Optional</sup> <a name="manual_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.manualTriggerConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

manual_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#manual_trigger_config ContainerAppJob#manual_trigger_config}

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.registries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]

registries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#registries ContainerAppJob#registries}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.registry"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#registry ContainerAppJob#registry}

---

##### `replica_retry_limit`<sup>Optional</sup> <a name="replica_retry_limit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.replicaRetryLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}.

---

##### `schedule_trigger_config`<sup>Optional</sup> <a name="schedule_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scheduleTriggerConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

schedule_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#schedule_trigger_config ContainerAppJob#schedule_trigger_config}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secret ContainerAppJob#secret}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.secrets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secrets ContainerAppJob#secrets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#tags ContainerAppJob#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#timeouts ContainerAppJob#timeouts}

---

##### `workload_profile_name`<sup>Optional</sup> <a name="workload_profile_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.workloadProfileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig">put_event_trigger_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig">put_manual_trigger_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistries">put_registries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry">put_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig">put_schedule_trigger_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecrets">put_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetEventTriggerConfig">reset_event_trigger_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetManualTriggerConfig">reset_manual_trigger_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistries">reset_registries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistry">reset_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetReplicaRetryLimit">reset_replica_retry_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetScheduleTriggerConfig">reset_schedule_trigger_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetWorkloadProfileName">reset_workload_profile_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_trigger_config` <a name="put_event_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig"></a>

```python
def put_event_trigger_config(
  parallelism: typing.Union[int, float] = None,
  replica_completion_count: typing.Union[int, float] = None,
  scale: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScale]] = None
) -> None
```

###### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig.parameter.parallelism"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

###### `replica_completion_count`<sup>Optional</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig.parameter.replicaCompletionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

###### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig.parameter.scale"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]

scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#scale ContainerAppJob#scale}

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#type ContainerAppJob#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}.

---

##### `put_manual_trigger_config` <a name="put_manual_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig"></a>

```python
def put_manual_trigger_config(
  parallelism: typing.Union[int, float] = None,
  replica_completion_count: typing.Union[int, float] = None
) -> None
```

###### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig.parameter.parallelism"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

###### `replica_completion_count`<sup>Optional</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig.parameter.replicaCompletionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

##### `put_registries` <a name="put_registries" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistries"></a>

```python
def put_registries(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobRegistries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]

---

##### `put_registry` <a name="put_registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry"></a>

```python
def put_registry(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobRegistry]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]

---

##### `put_schedule_trigger_config` <a name="put_schedule_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig"></a>

```python
def put_schedule_trigger_config(
  cron_expression: str,
  parallelism: typing.Union[int, float] = None,
  replica_completion_count: typing.Union[int, float] = None
) -> None
```

###### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig.parameter.cronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}.

---

###### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig.parameter.parallelism"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

###### `replica_completion_count`<sup>Optional</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig.parameter.replicaCompletionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]

---

##### `put_secrets` <a name="put_secrets" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecrets"></a>

```python
def put_secrets(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobSecrets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecrets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]

---

##### `put_template` <a name="put_template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate"></a>

```python
def put_template(
  container: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainer]],
  init_container: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainer]] = None,
  volume: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateVolume]] = None
) -> None
```

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate.parameter.container"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#container ContainerAppJob#container}

---

###### `init_container`<sup>Optional</sup> <a name="init_container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate.parameter.initContainer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#init_container ContainerAppJob#init_container}

---

###### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate.parameter.volume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#volume ContainerAppJob#volume}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#create ContainerAppJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#delete ContainerAppJob#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#read ContainerAppJob#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#update ContainerAppJob#update}.

---

##### `reset_event_trigger_config` <a name="reset_event_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetEventTriggerConfig"></a>

```python
def reset_event_trigger_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_manual_trigger_config` <a name="reset_manual_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetManualTriggerConfig"></a>

```python
def reset_manual_trigger_config() -> None
```

##### `reset_registries` <a name="reset_registries" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistries"></a>

```python
def reset_registries() -> None
```

##### `reset_registry` <a name="reset_registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistry"></a>

```python
def reset_registry() -> None
```

##### `reset_replica_retry_limit` <a name="reset_replica_retry_limit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetReplicaRetryLimit"></a>

```python
def reset_replica_retry_limit() -> None
```

##### `reset_schedule_trigger_config` <a name="reset_schedule_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetScheduleTriggerConfig"></a>

```python
def reset_schedule_trigger_config() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workload_profile_name` <a name="reset_workload_profile_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetWorkloadProfileName"></a>

```python
def reset_workload_profile_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerAppJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerAppJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerAppJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerAppJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint">event_stream_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig">event_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig">manual_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registries">registries</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList">ContainerAppJobRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig">schedule_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList">ContainerAppJobSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput">container_app_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput">event_trigger_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput">manual_trigger_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registriesInput">registries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput">registry_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput">replica_retry_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput">replica_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput">schedule_trigger_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretsInput">secrets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput">workload_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit">replica_retry_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds">replica_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName">workload_profile_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_stream_endpoint`<sup>Required</sup> <a name="event_stream_endpoint" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint"></a>

```python
event_stream_endpoint: str
```

- *Type:* str

---

##### `event_trigger_config`<sup>Required</sup> <a name="event_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig"></a>

```python
event_trigger_config: ContainerAppJobEventTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity"></a>

```python
identity: ContainerAppJobIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a>

---

##### `manual_trigger_config`<sup>Required</sup> <a name="manual_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig"></a>

```python
manual_trigger_config: ContainerAppJobManualTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a>

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registries`<sup>Required</sup> <a name="registries" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registries"></a>

```python
registries: ContainerAppJobRegistriesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList">ContainerAppJobRegistriesList</a>

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry"></a>

```python
registry: ContainerAppJobRegistryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a>

---

##### `schedule_trigger_config`<sup>Required</sup> <a name="schedule_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig"></a>

```python
schedule_trigger_config: ContainerAppJobScheduleTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret"></a>

```python
secret: ContainerAppJobSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secrets"></a>

```python
secrets: ContainerAppJobSecretsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList">ContainerAppJobSecretsList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template"></a>

```python
template: ContainerAppJobTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts"></a>

```python
timeouts: ContainerAppJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a>

---

##### `container_app_environment_id_input`<sup>Optional</sup> <a name="container_app_environment_id_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput"></a>

```python
container_app_environment_id_input: str
```

- *Type:* str

---

##### `event_trigger_config_input`<sup>Optional</sup> <a name="event_trigger_config_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput"></a>

```python
event_trigger_config_input: ContainerAppJobEventTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput"></a>

```python
identity_input: ContainerAppJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `manual_trigger_config_input`<sup>Optional</sup> <a name="manual_trigger_config_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput"></a>

```python
manual_trigger_config_input: ContainerAppJobManualTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `registries_input`<sup>Optional</sup> <a name="registries_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registriesInput"></a>

```python
registries_input: typing.Union[IResolvable, typing.List[ContainerAppJobRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]

---

##### `registry_input`<sup>Optional</sup> <a name="registry_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput"></a>

```python
registry_input: typing.Union[IResolvable, typing.List[ContainerAppJobRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]

---

##### `replica_retry_limit_input`<sup>Optional</sup> <a name="replica_retry_limit_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput"></a>

```python
replica_retry_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_timeout_in_seconds_input`<sup>Optional</sup> <a name="replica_timeout_in_seconds_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput"></a>

```python
replica_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `schedule_trigger_config_input`<sup>Optional</sup> <a name="schedule_trigger_config_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput"></a>

```python
schedule_trigger_config_input: ContainerAppJobScheduleTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[ContainerAppJobSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretsInput"></a>

```python
secrets_input: typing.Union[IResolvable, typing.List[ContainerAppJobSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput"></a>

```python
template_input: ContainerAppJobTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAppJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>]

---

##### `workload_profile_name_input`<sup>Optional</sup> <a name="workload_profile_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput"></a>

```python
workload_profile_name_input: str
```

- *Type:* str

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replica_retry_limit`<sup>Required</sup> <a name="replica_retry_limit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit"></a>

```python
replica_retry_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_timeout_in_seconds`<sup>Required</sup> <a name="replica_timeout_in_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds"></a>

```python
replica_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workload_profile_name`<sup>Required</sup> <a name="workload_profile_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName"></a>

```python
workload_profile_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppJobConfig <a name="ContainerAppJobConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_app_environment_id: str,
  location: str,
  name: str,
  replica_timeout_in_seconds: typing.Union[int, float],
  resource_group_name: str,
  template: ContainerAppJobTemplate,
  event_trigger_config: ContainerAppJobEventTriggerConfig = None,
  id: str = None,
  identity: ContainerAppJobIdentity = None,
  manual_trigger_config: ContainerAppJobManualTriggerConfig = None,
  registries: typing.Union[IResolvable, typing.List[ContainerAppJobRegistries]] = None,
  registry: typing.Union[IResolvable, typing.List[ContainerAppJobRegistry]] = None,
  replica_retry_limit: typing.Union[int, float] = None,
  schedule_trigger_config: ContainerAppJobScheduleTriggerConfig = None,
  secret: typing.Union[IResolvable, typing.List[ContainerAppJobSecret]] = None,
  secrets: typing.Union[IResolvable, typing.List[ContainerAppJobSecrets]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppJobTimeouts = None,
  workload_profile_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#location ContainerAppJob#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds">replica_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig">event_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | event_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#id ContainerAppJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig">manual_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | manual_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registries">registries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]</code> | registries block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry">registry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit">replica_retry_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig">schedule_trigger_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | schedule_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secrets">secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]</code> | secrets block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#tags ContainerAppJob#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName">workload_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#location ContainerAppJob#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `replica_timeout_in_seconds`<sup>Required</sup> <a name="replica_timeout_in_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds"></a>

```python
replica_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template"></a>

```python
template: ContainerAppJobTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#template ContainerAppJob#template}

---

##### `event_trigger_config`<sup>Optional</sup> <a name="event_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig"></a>

```python
event_trigger_config: ContainerAppJobEventTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

event_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#event_trigger_config ContainerAppJob#event_trigger_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#id ContainerAppJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity"></a>

```python
identity: ContainerAppJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `manual_trigger_config`<sup>Optional</sup> <a name="manual_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig"></a>

```python
manual_trigger_config: ContainerAppJobManualTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

manual_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#manual_trigger_config ContainerAppJob#manual_trigger_config}

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registries"></a>

```python
registries: typing.Union[IResolvable, typing.List[ContainerAppJobRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]

registries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#registries ContainerAppJob#registries}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry"></a>

```python
registry: typing.Union[IResolvable, typing.List[ContainerAppJobRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#registry ContainerAppJob#registry}

---

##### `replica_retry_limit`<sup>Optional</sup> <a name="replica_retry_limit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit"></a>

```python
replica_retry_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}.

---

##### `schedule_trigger_config`<sup>Optional</sup> <a name="schedule_trigger_config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig"></a>

```python
schedule_trigger_config: ContainerAppJobScheduleTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

schedule_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#schedule_trigger_config ContainerAppJob#schedule_trigger_config}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[ContainerAppJobSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secret ContainerAppJob#secret}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secrets"></a>

```python
secrets: typing.Union[IResolvable, typing.List[ContainerAppJobSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secrets ContainerAppJob#secrets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#tags ContainerAppJob#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts"></a>

```python
timeouts: ContainerAppJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#timeouts ContainerAppJob#timeouts}

---

##### `workload_profile_name`<sup>Optional</sup> <a name="workload_profile_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName"></a>

```python
workload_profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}.

---

### ContainerAppJobEventTriggerConfig <a name="ContainerAppJobEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfig(
  parallelism: typing.Union[int, float] = None,
  replica_completion_count: typing.Union[int, float] = None,
  scale: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScale]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount">replica_completion_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale">scale</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]</code> | scale block. |

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `replica_completion_count`<sup>Optional</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount"></a>

```python
replica_completion_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale"></a>

```python
scale: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScale]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]

scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#scale ContainerAppJob#scale}

---

### ContainerAppJobEventTriggerConfigScale <a name="ContainerAppJobEventTriggerConfigScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScale(
  max_executions: typing.Union[int, float] = None,
  min_executions: typing.Union[int, float] = None,
  polling_interval_in_seconds: typing.Union[int, float] = None,
  rules: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions">max_executions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions">min_executions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds">polling_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]]</code> | rules block. |

---

##### `max_executions`<sup>Optional</sup> <a name="max_executions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions"></a>

```python
max_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}.

---

##### `min_executions`<sup>Optional</sup> <a name="min_executions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions"></a>

```python
min_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}.

---

##### `polling_interval_in_seconds`<sup>Optional</sup> <a name="polling_interval_in_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds"></a>

```python
polling_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#rules ContainerAppJob#rules}

---

### ContainerAppJobEventTriggerConfigScaleRules <a name="ContainerAppJobEventTriggerConfigScaleRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleRules(
  custom_rule_type: str,
  metadata: typing.Mapping[str],
  name: str,
  authentication: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRulesAuthentication]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType">custom_rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication">authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]]</code> | authentication block. |

---

##### `custom_rule_type`<sup>Required</sup> <a name="custom_rule_type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType"></a>

```python
custom_rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication"></a>

```python
authentication: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRulesAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#authentication ContainerAppJob#authentication}

---

### ContainerAppJobEventTriggerConfigScaleRulesAuthentication <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication(
  secret_name: str,
  trigger_parameter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}.

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}.

---

### ContainerAppJobIdentity <a name="ContainerAppJobIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#type ContainerAppJob#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#type ContainerAppJob#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}.

---

### ContainerAppJobManualTriggerConfig <a name="ContainerAppJobManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobManualTriggerConfig(
  parallelism: typing.Union[int, float] = None,
  replica_completion_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount">replica_completion_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `replica_completion_count`<sup>Optional</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount"></a>

```python
replica_completion_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobRegistries <a name="ContainerAppJobRegistries" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobRegistries(
  server: str,
  identity: str = None,
  password_secret_name: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.server">server</a></code> | <code>str</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.identity">identity</a></code> | <code>str</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.passwordSecretName">password_secret_name</a></code> | <code>str</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.username">username</a></code> | <code>str</code> | The username to use for this Container Registry. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.server"></a>

```python
server: str
```

- *Type:* str

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#server ContainerAppJob#server}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.identity"></a>

```python
identity: str
```

- *Type:* str

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `password_secret_name`<sup>Optional</sup> <a name="password_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.passwordSecretName"></a>

```python
password_secret_name: str
```

- *Type:* str

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#password_secret_name ContainerAppJob#password_secret_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries.property.username"></a>

```python
username: str
```

- *Type:* str

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#username ContainerAppJob#username}

---

### ContainerAppJobRegistry <a name="ContainerAppJobRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobRegistry(
  server: str,
  identity: str = None,
  password_secret_name: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server">server</a></code> | <code>str</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity">identity</a></code> | <code>str</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName">password_secret_name</a></code> | <code>str</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username">username</a></code> | <code>str</code> | The username to use for this Container Registry. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server"></a>

```python
server: str
```

- *Type:* str

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#server ContainerAppJob#server}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity"></a>

```python
identity: str
```

- *Type:* str

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `password_secret_name`<sup>Optional</sup> <a name="password_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName"></a>

```python
password_secret_name: str
```

- *Type:* str

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#password_secret_name ContainerAppJob#password_secret_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username"></a>

```python
username: str
```

- *Type:* str

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#username ContainerAppJob#username}

---

### ContainerAppJobScheduleTriggerConfig <a name="ContainerAppJobScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobScheduleTriggerConfig(
  cron_expression: str,
  parallelism: typing.Union[int, float] = None,
  replica_completion_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount">replica_completion_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}.

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `replica_completion_count`<sup>Optional</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount"></a>

```python
replica_completion_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobSecret <a name="ContainerAppJobSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobSecret(
  name: str,
  identity: str = None,
  key_vault_secret_id: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name">name</a></code> | <code>str</code> | The secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity">identity</a></code> | <code>str</code> | The identity to use for accessing key vault reference. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | The Key Vault Secret ID. Could be either one of `id` or `versionless_id`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value">value</a></code> | <code>str</code> | The value for this secret. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name"></a>

```python
name: str
```

- *Type:* str

The secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity"></a>

```python
identity: str
```

- *Type:* str

The identity to use for accessing key vault reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `key_vault_secret_id`<sup>Optional</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#key_vault_secret_id ContainerAppJob#key_vault_secret_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobSecrets <a name="ContainerAppJobSecrets" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobSecrets(
  name: str,
  identity: str = None,
  key_vault_secret_id: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.name">name</a></code> | <code>str</code> | The secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.identity">identity</a></code> | <code>str</code> | The identity to use for accessing key vault reference. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | The Key Vault Secret ID. Could be either one of `id` or `versionless_id`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.value">value</a></code> | <code>str</code> | The value for this secret. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.name"></a>

```python
name: str
```

- *Type:* str

The secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.identity"></a>

```python
identity: str
```

- *Type:* str

The identity to use for accessing key vault reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `key_vault_secret_id`<sup>Optional</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#key_vault_secret_id ContainerAppJob#key_vault_secret_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplate <a name="ContainerAppJobTemplate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplate(
  container: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainer]],
  init_container: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainer]] = None,
  volume: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateVolume]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container">container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer">init_container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]</code> | volume block. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container"></a>

```python
container: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#container ContainerAppJob#container}

---

##### `init_container`<sup>Optional</sup> <a name="init_container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer"></a>

```python
init_container: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#init_container ContainerAppJob#init_container}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#volume ContainerAppJob#volume}

---

### ContainerAppJobTemplateContainer <a name="ContainerAppJobTemplateContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainer(
  cpu: typing.Union[int, float],
  image: str,
  memory: str,
  name: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerEnv]] = None,
  liveness_probe: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbe]] = None,
  readiness_probe: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbe]] = None,
  startup_probe: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbe]] = None,
  volume_mounts: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerVolumeMounts]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image">image</a></code> | <code>str</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory">memory</a></code> | <code>str</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name">name</a></code> | <code>str</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args">args</a></code> | <code>typing.List[str]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command">command</a></code> | <code>typing.List[str]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe">liveness_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]]</code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe">readiness_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]]</code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe">startup_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]]</code> | startup_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]]</code> | volume_mounts block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image"></a>

```python
image: str
```

- *Type:* str

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory"></a>

```python
memory: str
```

- *Type:* str

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `liveness_probe`<sup>Optional</sup> <a name="liveness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe"></a>

```python
liveness_probe: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]]

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#liveness_probe ContainerAppJob#liveness_probe}

---

##### `readiness_probe`<sup>Optional</sup> <a name="readiness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe"></a>

```python
readiness_probe: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]]

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#readiness_probe ContainerAppJob#readiness_probe}

---

##### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe"></a>

```python
startup_probe: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]]

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#startup_probe ContainerAppJob#startup_probe}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateContainerEnv <a name="ContainerAppJobTemplateContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerEnv(
  name: str,
  secret_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name">name</a></code> | <code>str</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName">secret_name</a></code> | <code>str</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value">value</a></code> | <code>str</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerLivenessProbe <a name="ContainerAppJobTemplateContainerLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerLivenessProbe(
  port: typing.Union[int, float],
  transport: str,
  failure_count_threshold: typing.Union[int, float] = None,
  header: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbeHeader]] = None,
  host: str = None,
  initial_delay: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport">transport</a></code> | <code>str</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host">host</a></code> | <code>str</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay">initial_delay</a></code> | <code>typing.Union[int, float]</code> | The time in seconds to wait after the container has started before the probe is started. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path">path</a></code> | <code>str</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport"></a>

```python
transport: str
```

- *Type:* str

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `failure_count_threshold`<sup>Optional</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host"></a>

```python
host: str
```

- *Type:* str

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `initial_delay`<sup>Optional</sup> <a name="initial_delay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay"></a>

```python
initial_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time in seconds to wait after the container has started before the probe is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path"></a>

```python
path: str
```

- *Type:* str

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerLivenessProbeHeader <a name="ContainerAppJobTemplateContainerLivenessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name">name</a></code> | <code>str</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value">value</a></code> | <code>str</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerReadinessProbe <a name="ContainerAppJobTemplateContainerReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerReadinessProbe(
  port: typing.Union[int, float],
  transport: str,
  failure_count_threshold: typing.Union[int, float] = None,
  header: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbeHeader]] = None,
  host: str = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  success_count_threshold: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport">transport</a></code> | <code>str</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host">host</a></code> | <code>str</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path">path</a></code> | <code>str</code> | The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold">success_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive successful responses required to consider this probe as successful. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport"></a>

```python
transport: str
```

- *Type:* str

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `failure_count_threshold`<sup>Optional</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host"></a>

```python
host: str
```

- *Type:* str

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path"></a>

```python
path: str
```

- *Type:* str

The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `success_count_threshold`<sup>Optional</sup> <a name="success_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold"></a>

```python
success_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive successful responses required to consider this probe as successful.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#success_count_threshold ContainerAppJob#success_count_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerReadinessProbeHeader <a name="ContainerAppJobTemplateContainerReadinessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name">name</a></code> | <code>str</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value">value</a></code> | <code>str</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerStartupProbe <a name="ContainerAppJobTemplateContainerStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerStartupProbe(
  port: typing.Union[int, float],
  transport: str,
  failure_count_threshold: typing.Union[int, float] = None,
  header: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbeHeader]] = None,
  host: str = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport">transport</a></code> | <code>str</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host">host</a></code> | <code>str</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path">path</a></code> | <code>str</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport"></a>

```python
transport: str
```

- *Type:* str

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `failure_count_threshold`<sup>Optional</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host"></a>

```python
host: str
```

- *Type:* str

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path"></a>

```python
path: str
```

- *Type:* str

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerStartupProbeHeader <a name="ContainerAppJobTemplateContainerStartupProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name">name</a></code> | <code>str</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value">value</a></code> | <code>str</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerVolumeMounts <a name="ContainerAppJobTemplateContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerVolumeMounts(
  name: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name">name</a></code> | <code>str</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path">path</a></code> | <code>str</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path"></a>

```python
path: str
```

- *Type:* str

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

### ContainerAppJobTemplateInitContainer <a name="ContainerAppJobTemplateInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainer(
  image: str,
  name: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  cpu: typing.Union[int, float] = None,
  env: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerEnv]] = None,
  memory: str = None,
  volume_mounts: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerVolumeMounts]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image">image</a></code> | <code>str</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name">name</a></code> | <code>str</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args">args</a></code> | <code>typing.List[str]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command">command</a></code> | <code>typing.List[str]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory">memory</a></code> | <code>str</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]]</code> | volume_mounts block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image"></a>

```python
image: str
```

- *Type:* str

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory"></a>

```python
memory: str
```

- *Type:* str

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateInitContainerEnv <a name="ContainerAppJobTemplateInitContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerEnv(
  name: str,
  secret_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name">name</a></code> | <code>str</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName">secret_name</a></code> | <code>str</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value">value</a></code> | <code>str</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateInitContainerVolumeMounts <a name="ContainerAppJobTemplateInitContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts(
  name: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name">name</a></code> | <code>str</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path">path</a></code> | <code>str</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path"></a>

```python
path: str
```

- *Type:* str

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

### ContainerAppJobTemplateVolume <a name="ContainerAppJobTemplateVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateVolume(
  name: str,
  storage_name: str = None,
  storage_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name">name</a></code> | <code>str</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName">storage_name</a></code> | <code>str</code> | The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType">storage_type</a></code> | <code>str</code> | The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `storage_name`<sup>Optional</sup> <a name="storage_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName"></a>

```python
storage_name: str
```

- *Type:* str

The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#storage_name ContainerAppJob#storage_name}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#storage_type ContainerAppJob#storage_type}

---

### ContainerAppJobTimeouts <a name="ContainerAppJobTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#create ContainerAppJob#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#delete ContainerAppJob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#read ContainerAppJob#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#update ContainerAppJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#create ContainerAppJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#delete ContainerAppJob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#read ContainerAppJob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/container_app_job#update ContainerAppJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppJobEventTriggerConfigOutputReference <a name="ContainerAppJobEventTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale">put_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetParallelism">reset_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetReplicaCompletionCount">reset_replica_completion_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetScale">reset_scale</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scale` <a name="put_scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale"></a>

```python
def put_scale(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScale]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]

---

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetParallelism"></a>

```python
def reset_parallelism() -> None
```

##### `reset_replica_completion_count` <a name="reset_replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```python
def reset_replica_completion_count() -> None
```

##### `reset_scale` <a name="reset_scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetScale"></a>

```python
def reset_scale() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale">scale</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput">replica_completion_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput">scale_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount">replica_completion_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale"></a>

```python
scale: ContainerAppJobEventTriggerConfigScaleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a>

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_completion_count_input`<sup>Optional</sup> <a name="replica_completion_count_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```python
replica_completion_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_input`<sup>Optional</sup> <a name="scale_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput"></a>

```python
scale_input: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScale]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_completion_count`<sup>Required</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```python
replica_completion_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppJobEventTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---


### ContainerAppJobEventTriggerConfigScaleList <a name="ContainerAppJobEventTriggerConfigScaleList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobEventTriggerConfigScaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScale]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]]

---


### ContainerAppJobEventTriggerConfigScaleOutputReference <a name="ContainerAppJobEventTriggerConfigScaleOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMaxExecutions">reset_max_executions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMinExecutions">reset_min_executions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetPollingIntervalInSeconds">reset_polling_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]]

---

##### `reset_max_executions` <a name="reset_max_executions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMaxExecutions"></a>

```python
def reset_max_executions() -> None
```

##### `reset_min_executions` <a name="reset_min_executions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMinExecutions"></a>

```python
def reset_min_executions() -> None
```

##### `reset_polling_interval_in_seconds` <a name="reset_polling_interval_in_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetPollingIntervalInSeconds"></a>

```python
def reset_polling_interval_in_seconds() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput">max_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput">min_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput">polling_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions">max_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions">min_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds">polling_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules"></a>

```python
rules: ContainerAppJobEventTriggerConfigScaleRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a>

---

##### `max_executions_input`<sup>Optional</sup> <a name="max_executions_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput"></a>

```python
max_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_executions_input`<sup>Optional</sup> <a name="min_executions_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput"></a>

```python
min_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `polling_interval_in_seconds_input`<sup>Optional</sup> <a name="polling_interval_in_seconds_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput"></a>

```python
polling_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]]

---

##### `max_executions`<sup>Required</sup> <a name="max_executions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions"></a>

```python
max_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_executions`<sup>Required</sup> <a name="min_executions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions"></a>

```python
min_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `polling_interval_in_seconds`<sup>Required</sup> <a name="polling_interval_in_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds"></a>

```python
polling_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobEventTriggerConfigScale]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>]

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRulesAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]]

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput">trigger_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `trigger_parameter_input`<sup>Optional</sup> <a name="trigger_parameter_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput"></a>

```python
trigger_parameter_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobEventTriggerConfigScaleRulesAuthentication]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]

---


### ContainerAppJobEventTriggerConfigScaleRulesList <a name="ContainerAppJobEventTriggerConfigScaleRulesList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobEventTriggerConfigScaleRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]]

---


### ContainerAppJobEventTriggerConfigScaleRulesOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication"></a>

```python
def put_authentication(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRulesAuthentication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]]

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput">authentication_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput">custom_rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType">custom_rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication"></a>

```python
authentication: ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput"></a>

```python
authentication_input: typing.Union[IResolvable, typing.List[ContainerAppJobEventTriggerConfigScaleRulesAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>]]

---

##### `custom_rule_type_input`<sup>Optional</sup> <a name="custom_rule_type_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput"></a>

```python
custom_rule_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `custom_rule_type`<sup>Required</sup> <a name="custom_rule_type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType"></a>

```python
custom_rule_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobEventTriggerConfigScaleRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>]

---


### ContainerAppJobIdentityOutputReference <a name="ContainerAppJobIdentityOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---


### ContainerAppJobManualTriggerConfigOutputReference <a name="ContainerAppJobManualTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobManualTriggerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetParallelism">reset_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetReplicaCompletionCount">reset_replica_completion_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetParallelism"></a>

```python
def reset_parallelism() -> None
```

##### `reset_replica_completion_count` <a name="reset_replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```python
def reset_replica_completion_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput">replica_completion_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount">replica_completion_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_completion_count_input`<sup>Optional</sup> <a name="replica_completion_count_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```python
replica_completion_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_completion_count`<sup>Required</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```python
replica_completion_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppJobManualTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---


### ContainerAppJobRegistriesList <a name="ContainerAppJobRegistriesList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobRegistriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobRegistriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]]

---


### ContainerAppJobRegistriesOutputReference <a name="ContainerAppJobRegistriesOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobRegistriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resetPasswordSecretName">reset_password_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_password_secret_name` <a name="reset_password_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resetPasswordSecretName"></a>

```python
def reset_password_secret_name() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.passwordSecretNameInput">password_secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.passwordSecretName">password_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `password_secret_name_input`<sup>Optional</sup> <a name="password_secret_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.passwordSecretNameInput"></a>

```python
password_secret_name_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `password_secret_name`<sup>Required</sup> <a name="password_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.passwordSecretName"></a>

```python
password_secret_name: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobRegistries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistries">ContainerAppJobRegistries</a>]

---


### ContainerAppJobRegistryList <a name="ContainerAppJobRegistryList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobRegistryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]]

---


### ContainerAppJobRegistryOutputReference <a name="ContainerAppJobRegistryOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobRegistryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetPasswordSecretName">reset_password_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_password_secret_name` <a name="reset_password_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetPasswordSecretName"></a>

```python
def reset_password_secret_name() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput">password_secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName">password_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `password_secret_name_input`<sup>Optional</sup> <a name="password_secret_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput"></a>

```python
password_secret_name_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `password_secret_name`<sup>Required</sup> <a name="password_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName"></a>

```python
password_secret_name: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobRegistry]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>]

---


### ContainerAppJobScheduleTriggerConfigOutputReference <a name="ContainerAppJobScheduleTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetParallelism">reset_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetReplicaCompletionCount">reset_replica_completion_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetParallelism"></a>

```python
def reset_parallelism() -> None
```

##### `reset_replica_completion_count` <a name="reset_replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```python
def reset_replica_completion_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput">replica_completion_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount">replica_completion_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_completion_count_input`<sup>Optional</sup> <a name="replica_completion_count_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```python
replica_completion_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_completion_count`<sup>Required</sup> <a name="replica_completion_count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```python
replica_completion_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppJobScheduleTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---


### ContainerAppJobSecretList <a name="ContainerAppJobSecretList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]]

---


### ContainerAppJobSecretOutputReference <a name="ContainerAppJobSecretOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetKeyVaultSecretId">reset_key_vault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_secret_id` <a name="reset_key_vault_secret_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetKeyVaultSecretId"></a>

```python
def reset_key_vault_secret_id() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput">key_vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `key_vault_secret_id_input`<sup>Optional</sup> <a name="key_vault_secret_id_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput"></a>

```python
key_vault_secret_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `key_vault_secret_id`<sup>Required</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobSecret]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>]

---


### ContainerAppJobSecretsList <a name="ContainerAppJobSecretsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]]

---


### ContainerAppJobSecretsOutputReference <a name="ContainerAppJobSecretsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resetKeyVaultSecretId">reset_key_vault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_secret_id` <a name="reset_key_vault_secret_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resetKeyVaultSecretId"></a>

```python
def reset_key_vault_secret_id() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.keyVaultSecretIdInput">key_vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `key_vault_secret_id_input`<sup>Optional</sup> <a name="key_vault_secret_id_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.keyVaultSecretIdInput"></a>

```python
key_vault_secret_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `key_vault_secret_id`<sup>Required</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobSecrets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecrets">ContainerAppJobSecrets</a>]

---


### ContainerAppJobTemplateContainerEnvList <a name="ContainerAppJobTemplateContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]]

---


### ContainerAppJobTemplateContainerEnvOutputReference <a name="ContainerAppJobTemplateContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]

---


### ContainerAppJobTemplateContainerList <a name="ContainerAppJobTemplateContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderList <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]]

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerLivenessProbeHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]

---


### ContainerAppJobTemplateContainerLivenessProbeList <a name="ContainerAppJobTemplateContainerLivenessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerLivenessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]]

---


### ContainerAppJobTemplateContainerLivenessProbeOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold">reset_failure_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetInitialDelay">reset_initial_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbeHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]]

---

##### `reset_failure_count_threshold` <a name="reset_failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold"></a>

```python
def reset_failure_count_threshold() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_initial_delay` <a name="reset_initial_delay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetInitialDelay"></a>

```python
def reset_initial_delay() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds">termination_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput">failure_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput">initial_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput">transport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay">initial_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header"></a>

```python
header: ContainerAppJobTemplateContainerLivenessProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a>

---

##### `termination_grace_period_seconds`<sup>Required</sup> <a name="termination_grace_period_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```python
termination_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_count_threshold_input`<sup>Optional</sup> <a name="failure_count_threshold_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput"></a>

```python
failure_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>]]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `initial_delay_input`<sup>Optional</sup> <a name="initial_delay_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput"></a>

```python
initial_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput"></a>

```python
transport_input: str
```

- *Type:* str

---

##### `failure_count_threshold`<sup>Required</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `initial_delay`<sup>Required</sup> <a name="initial_delay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay"></a>

```python
initial_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerLivenessProbe]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]

---


### ContainerAppJobTemplateContainerOutputReference <a name="ContainerAppJobTemplateContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe">put_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe">put_readiness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe">put_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetLivenessProbe">reset_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetReadinessProbe">reset_readiness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetStartupProbe">reset_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]]

---

##### `put_liveness_probe` <a name="put_liveness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe"></a>

```python
def put_liveness_probe(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbe]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]]

---

##### `put_readiness_probe` <a name="put_readiness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe"></a>

```python
def put_readiness_probe(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbe]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]]

---

##### `put_startup_probe` <a name="put_startup_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe"></a>

```python
def put_startup_probe(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbe]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]]

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_liveness_probe` <a name="reset_liveness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetLivenessProbe"></a>

```python
def reset_liveness_probe() -> None
```

##### `reset_readiness_probe` <a name="reset_readiness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetReadinessProbe"></a>

```python
def reset_readiness_probe() -> None
```

##### `reset_startup_probe` <a name="reset_startup_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetStartupProbe"></a>

```python
def reset_startup_probe() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage">ephemeral_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe">readiness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput">liveness_probe_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput">readiness_probe_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput">startup_probe_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env"></a>

```python
env: ContainerAppJobTemplateContainerEnvList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a>

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage"></a>

```python
ephemeral_storage: str
```

- *Type:* str

---

##### `liveness_probe`<sup>Required</sup> <a name="liveness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe"></a>

```python
liveness_probe: ContainerAppJobTemplateContainerLivenessProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a>

---

##### `readiness_probe`<sup>Required</sup> <a name="readiness_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe"></a>

```python
readiness_probe: ContainerAppJobTemplateContainerReadinessProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a>

---

##### `startup_probe`<sup>Required</sup> <a name="startup_probe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe"></a>

```python
startup_probe: ContainerAppJobTemplateContainerStartupProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a>

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts"></a>

```python
volume_mounts: ContainerAppJobTemplateContainerVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `liveness_probe_input`<sup>Optional</sup> <a name="liveness_probe_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput"></a>

```python
liveness_probe_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerLivenessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>]]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `readiness_probe_input`<sup>Optional</sup> <a name="readiness_probe_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput"></a>

```python
readiness_probe_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]]

---

##### `startup_probe_input`<sup>Optional</sup> <a name="startup_probe_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput"></a>

```python
startup_probe_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]]

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderList <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]]

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerReadinessProbeHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]

---


### ContainerAppJobTemplateContainerReadinessProbeList <a name="ContainerAppJobTemplateContainerReadinessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerReadinessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]]

---


### ContainerAppJobTemplateContainerReadinessProbeOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold">reset_failure_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold">reset_success_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbeHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]]

---

##### `reset_failure_count_threshold` <a name="reset_failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold"></a>

```python
def reset_failure_count_threshold() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_success_count_threshold` <a name="reset_success_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold"></a>

```python
def reset_success_count_threshold() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput">failure_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput">success_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput">transport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold">success_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header"></a>

```python
header: ContainerAppJobTemplateContainerReadinessProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a>

---

##### `failure_count_threshold_input`<sup>Optional</sup> <a name="failure_count_threshold_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput"></a>

```python
failure_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerReadinessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>]]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_count_threshold_input`<sup>Optional</sup> <a name="success_count_threshold_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput"></a>

```python
success_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput"></a>

```python
transport_input: str
```

- *Type:* str

---

##### `failure_count_threshold`<sup>Required</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_count_threshold`<sup>Required</sup> <a name="success_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold"></a>

```python
success_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerReadinessProbe]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>]

---


### ContainerAppJobTemplateContainerStartupProbeHeaderList <a name="ContainerAppJobTemplateContainerStartupProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]]

---


### ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerStartupProbeHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]

---


### ContainerAppJobTemplateContainerStartupProbeList <a name="ContainerAppJobTemplateContainerStartupProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerStartupProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerStartupProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]]

---


### ContainerAppJobTemplateContainerStartupProbeOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold">reset_failure_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbeHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]]

---

##### `reset_failure_count_threshold` <a name="reset_failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold"></a>

```python
def reset_failure_count_threshold() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds">termination_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput">failure_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput">transport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header"></a>

```python
header: ContainerAppJobTemplateContainerStartupProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a>

---

##### `termination_grace_period_seconds`<sup>Required</sup> <a name="termination_grace_period_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```python
termination_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_count_threshold_input`<sup>Optional</sup> <a name="failure_count_threshold_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput"></a>

```python
failure_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerStartupProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>]]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput"></a>

```python
transport_input: str
```

- *Type:* str

---

##### `failure_count_threshold`<sup>Required</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerStartupProbe]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>]

---


### ContainerAppJobTemplateContainerVolumeMountsList <a name="ContainerAppJobTemplateContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]]

---


### ContainerAppJobTemplateContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateContainerVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>]

---


### ContainerAppJobTemplateInitContainerEnvList <a name="ContainerAppJobTemplateInitContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateInitContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]]

---


### ContainerAppJobTemplateInitContainerEnvOutputReference <a name="ContainerAppJobTemplateInitContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateInitContainerEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]

---


### ContainerAppJobTemplateInitContainerList <a name="ContainerAppJobTemplateInitContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateInitContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]

---


### ContainerAppJobTemplateInitContainerOutputReference <a name="ContainerAppJobTemplateInitContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]]

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage">ephemeral_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env"></a>

```python
env: ContainerAppJobTemplateInitContainerEnvList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a>

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage"></a>

```python
ephemeral_storage: str
```

- *Type:* str

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts"></a>

```python
volume_mounts: ContainerAppJobTemplateInitContainerVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateInitContainer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]

---


### ContainerAppJobTemplateInitContainerVolumeMountsList <a name="ContainerAppJobTemplateInitContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateInitContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]]

---


### ContainerAppJobTemplateInitContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateInitContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateInitContainerVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>]

---


### ContainerAppJobTemplateOutputReference <a name="ContainerAppJobTemplateOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer">put_init_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetInitContainer">reset_init_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container` <a name="put_container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer"></a>

```python
def put_container(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]

---

##### `put_init_container` <a name="put_init_container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer"></a>

```python
def put_init_container(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]

---

##### `reset_init_container` <a name="reset_init_container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetInitContainer"></a>

```python
def reset_init_container() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetVolume"></a>

```python
def reset_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer">init_container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput">container_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput">init_container_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container"></a>

```python
container: ContainerAppJobTemplateContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a>

---

##### `init_container`<sup>Required</sup> <a name="init_container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer"></a>

```python
init_container: ContainerAppJobTemplateInitContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume"></a>

```python
volume: ContainerAppJobTemplateVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput"></a>

```python
container_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>]]

---

##### `init_container_input`<sup>Optional</sup> <a name="init_container_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput"></a>

```python
init_container_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateInitContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>]]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppJobTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---


### ContainerAppJobTemplateVolumeList <a name="ContainerAppJobTemplateVolumeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppJobTemplateVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppJobTemplateVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]]

---


### ContainerAppJobTemplateVolumeOutputReference <a name="ContainerAppJobTemplateVolumeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTemplateVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageName">reset_storage_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageType">reset_storage_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_name` <a name="reset_storage_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageName"></a>

```python
def reset_storage_name() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageType"></a>

```python
def reset_storage_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput">storage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName">storage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_name_input`<sup>Optional</sup> <a name="storage_name_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput"></a>

```python
storage_name_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_name`<sup>Required</sup> <a name="storage_name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName"></a>

```python
storage_name: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTemplateVolume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>]

---


### ContainerAppJobTimeoutsOutputReference <a name="ContainerAppJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_job

containerAppJob.ContainerAppJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>]

---



