# `dataFactoryTriggerSchedule` Submodule <a name="`dataFactoryTriggerSchedule` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerSchedule <a name="DataFactoryTriggerSchedule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule azurerm_data_factory_trigger_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  name: str,
  activated: typing.Union[bool, IResolvable] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  end_time: str = None,
  frequency: str = None,
  id: str = None,
  interval: typing.Union[int, float] = None,
  pipeline: typing.Union[IResolvable, typing.List[DataFactoryTriggerSchedulePipeline]] = None,
  pipeline_name: str = None,
  pipeline_parameters: typing.Mapping[str] = None,
  schedule: DataFactoryTriggerScheduleSchedule = None,
  start_time: str = None,
  timeouts: DataFactoryTriggerScheduleTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipeline">pipeline</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]</code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineName">pipeline_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineParameters">pipeline_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.activated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipeline"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline DataFactoryTriggerSchedule#pipeline}

---

##### `pipeline_name`<sup>Optional</sup> <a name="pipeline_name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}.

---

##### `pipeline_parameters`<sup>Optional</sup> <a name="pipeline_parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#schedule DataFactoryTriggerSchedule#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#timeouts DataFactoryTriggerSchedule#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline">put_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated">reset_activated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline">reset_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName">reset_pipeline_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters">reset_pipeline_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pipeline` <a name="put_pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline"></a>

```python
def put_pipeline(
  value: typing.Union[IResolvable, typing.List[DataFactoryTriggerSchedulePipeline]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule"></a>

```python
def put_schedule(
  days_of_month: typing.List[typing.Union[int, float]] = None,
  days_of_week: typing.List[str] = None,
  hours: typing.List[typing.Union[int, float]] = None,
  minutes: typing.List[typing.Union[int, float]] = None,
  monthly: typing.Union[IResolvable, typing.List[DataFactoryTriggerScheduleScheduleMonthly]] = None
) -> None
```

###### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.daysOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}.

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}.

---

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.hours"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}.

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.minutes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}.

---

###### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.monthly"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#monthly DataFactoryTriggerSchedule#monthly}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}.

---

##### `reset_activated` <a name="reset_activated" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated"></a>

```python
def reset_activated() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_pipeline` <a name="reset_pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline"></a>

```python
def reset_pipeline() -> None
```

##### `reset_pipeline_name` <a name="reset_pipeline_name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName"></a>

```python
def reset_pipeline_name() -> None
```

##### `reset_pipeline_parameters` <a name="reset_pipeline_parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters"></a>

```python
def reset_pipeline_parameters() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryTriggerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryTriggerSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryTriggerSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryTriggerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput">activated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput">pipeline_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput">pipeline_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput">pipeline_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName">pipeline_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters">pipeline_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline"></a>

```python
pipeline: DataFactoryTriggerSchedulePipelineList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule"></a>

```python
schedule: DataFactoryTriggerScheduleScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts"></a>

```python
timeouts: DataFactoryTriggerScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a>

---

##### `activated_input`<sup>Optional</sup> <a name="activated_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput"></a>

```python
activated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pipeline_input`<sup>Optional</sup> <a name="pipeline_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput"></a>

```python
pipeline_input: typing.Union[IResolvable, typing.List[DataFactoryTriggerSchedulePipeline]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]

---

##### `pipeline_name_input`<sup>Optional</sup> <a name="pipeline_name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput"></a>

```python
pipeline_name_input: str
```

- *Type:* str

---

##### `pipeline_parameters_input`<sup>Optional</sup> <a name="pipeline_parameters_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput"></a>

```python
pipeline_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput"></a>

```python
schedule_input: DataFactoryTriggerScheduleSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryTriggerScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated"></a>

```python
activated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

---

##### `pipeline_parameters`<sup>Required</sup> <a name="pipeline_parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters"></a>

```python
pipeline_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerScheduleConfig <a name="DataFactoryTriggerScheduleConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  name: str,
  activated: typing.Union[bool, IResolvable] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  end_time: str = None,
  frequency: str = None,
  id: str = None,
  interval: typing.Union[int, float] = None,
  pipeline: typing.Union[IResolvable, typing.List[DataFactoryTriggerSchedulePipeline]] = None,
  pipeline_name: str = None,
  pipeline_parameters: typing.Mapping[str] = None,
  schedule: DataFactoryTriggerScheduleSchedule = None,
  start_time: str = None,
  timeouts: DataFactoryTriggerScheduleTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline">pipeline</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]</code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName">pipeline_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters">pipeline_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated"></a>

```python
activated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline"></a>

```python
pipeline: typing.Union[IResolvable, typing.List[DataFactoryTriggerSchedulePipeline]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline DataFactoryTriggerSchedule#pipeline}

---

##### `pipeline_name`<sup>Optional</sup> <a name="pipeline_name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}.

---

##### `pipeline_parameters`<sup>Optional</sup> <a name="pipeline_parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters"></a>

```python
pipeline_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule"></a>

```python
schedule: DataFactoryTriggerScheduleSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#schedule DataFactoryTriggerSchedule#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts"></a>

```python
timeouts: DataFactoryTriggerScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#timeouts DataFactoryTriggerSchedule#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}.

---

### DataFactoryTriggerSchedulePipeline <a name="DataFactoryTriggerSchedulePipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline(
  name: str,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}.

---

### DataFactoryTriggerScheduleSchedule <a name="DataFactoryTriggerScheduleSchedule" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule(
  days_of_month: typing.List[typing.Union[int, float]] = None,
  days_of_week: typing.List[str] = None,
  hours: typing.List[typing.Union[int, float]] = None,
  minutes: typing.List[typing.Union[int, float]] = None,
  monthly: typing.Union[IResolvable, typing.List[DataFactoryTriggerScheduleScheduleMonthly]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours">hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes">minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly">monthly</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]</code> | monthly block. |

---

##### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}.

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours"></a>

```python
hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes"></a>

```python
minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}.

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly"></a>

```python
monthly: typing.Union[IResolvable, typing.List[DataFactoryTriggerScheduleScheduleMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#monthly DataFactoryTriggerSchedule#monthly}

---

### DataFactoryTriggerScheduleScheduleMonthly <a name="DataFactoryTriggerScheduleScheduleMonthly" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly(
  weekday: str,
  week: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday">weekday</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week">week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}. |

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday"></a>

```python
weekday: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}.

---

##### `week`<sup>Optional</sup> <a name="week" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week"></a>

```python
week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}.

---

### DataFactoryTriggerScheduleTimeouts <a name="DataFactoryTriggerScheduleTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerSchedulePipelineList <a name="DataFactoryTriggerSchedulePipelineList" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryTriggerSchedulePipelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryTriggerSchedulePipeline]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]]

---


### DataFactoryTriggerSchedulePipelineOutputReference <a name="DataFactoryTriggerSchedulePipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryTriggerSchedulePipeline]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>]

---


### DataFactoryTriggerScheduleScheduleMonthlyList <a name="DataFactoryTriggerScheduleScheduleMonthlyList" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryTriggerScheduleScheduleMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryTriggerScheduleScheduleMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]

---


### DataFactoryTriggerScheduleScheduleMonthlyOutputReference <a name="DataFactoryTriggerScheduleScheduleMonthlyOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek">reset_week</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_week` <a name="reset_week" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek"></a>

```python
def reset_week() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput">weekday_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput">week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week">week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday">weekday</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weekday_input`<sup>Optional</sup> <a name="weekday_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput"></a>

```python
weekday_input: str
```

- *Type:* str

---

##### `week_input`<sup>Optional</sup> <a name="week_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput"></a>

```python
week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week`<sup>Required</sup> <a name="week" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week"></a>

```python
week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday"></a>

```python
weekday: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryTriggerScheduleScheduleMonthly]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]

---


### DataFactoryTriggerScheduleScheduleOutputReference <a name="DataFactoryTriggerScheduleScheduleOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly">put_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth">reset_days_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly">reset_monthly</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_monthly` <a name="put_monthly" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly"></a>

```python
def put_monthly(
  value: typing.Union[IResolvable, typing.List[DataFactoryTriggerScheduleScheduleMonthly]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]

---

##### `reset_days_of_month` <a name="reset_days_of_month" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth"></a>

```python
def reset_days_of_month() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_monthly` <a name="reset_monthly" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly"></a>

```python
def reset_monthly() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput">days_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput">monthly_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours">hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes">minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly"></a>

```python
monthly: DataFactoryTriggerScheduleScheduleMonthlyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a>

---

##### `days_of_month_input`<sup>Optional</sup> <a name="days_of_month_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput"></a>

```python
days_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput"></a>

```python
hours_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `monthly_input`<sup>Optional</sup> <a name="monthly_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput"></a>

```python
monthly_input: typing.Union[IResolvable, typing.List[DataFactoryTriggerScheduleScheduleMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>]]

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours"></a>

```python
hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes"></a>

```python
minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryTriggerScheduleSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---


### DataFactoryTriggerScheduleTimeoutsOutputReference <a name="DataFactoryTriggerScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_schedule

dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryTriggerScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>]

---



