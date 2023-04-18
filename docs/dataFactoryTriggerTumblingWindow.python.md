# `azurerm_data_factory_trigger_tumbling_window`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_trigger_tumbling_window`](https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window).

# `dataFactoryTriggerTumblingWindow` Submodule <a name="`dataFactoryTriggerTumblingWindow` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerTumblingWindow <a name="DataFactoryTriggerTumblingWindow" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window azurerm_data_factory_trigger_tumbling_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  frequency: str,
  interval: typing.Union[int, float],
  name: str,
  pipeline: DataFactoryTriggerTumblingWindowPipeline,
  start_time: str,
  activated: typing.Union[bool, IResolvable] = None,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  delay: str = None,
  description: str = None,
  end_time: str = None,
  id: str = None,
  max_concurrency: typing.Union[int, float] = None,
  retry: DataFactoryTriggerTumblingWindowRetry = None,
  timeouts: DataFactoryTriggerTumblingWindowTimeouts = None,
  trigger_dependency: typing.Union[IResolvable, typing.List[DataFactoryTriggerTumblingWindowTriggerDependency]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.delay">delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.triggerDependency">trigger_dependency</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]</code> | trigger_dependency block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.pipeline"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

pipeline block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#pipeline DataFactoryTriggerTumblingWindow#pipeline}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.activated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}.

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.delay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.maxConcurrency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#retry DataFactoryTriggerTumblingWindow#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#timeouts DataFactoryTriggerTumblingWindow#timeouts}

---

##### `trigger_dependency`<sup>Optional</sup> <a name="trigger_dependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.triggerDependency"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]

trigger_dependency block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#trigger_dependency DataFactoryTriggerTumblingWindow#trigger_dependency}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline">put_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency">put_trigger_dependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetActivated">reset_activated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDelay">reset_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetMaxConcurrency">reset_max_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTriggerDependency">reset_trigger_dependency</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_pipeline` <a name="put_pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline"></a>

```python
def put_pipeline(
  name: str,
  parameters: typing.Mapping[str] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#parameters DataFactoryTriggerTumblingWindow#parameters}.

---

##### `put_retry` <a name="put_retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry"></a>

```python
def put_retry(
  count: typing.Union[int, float],
  interval: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#count DataFactoryTriggerTumblingWindow#count}.

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#create DataFactoryTriggerTumblingWindow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#delete DataFactoryTriggerTumblingWindow#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#read DataFactoryTriggerTumblingWindow#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#update DataFactoryTriggerTumblingWindow#update}.

---

##### `put_trigger_dependency` <a name="put_trigger_dependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency"></a>

```python
def put_trigger_dependency(
  value: typing.Union[IResolvable, typing.List[DataFactoryTriggerTumblingWindowTriggerDependency]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]

---

##### `reset_activated` <a name="reset_activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetActivated"></a>

```python
def reset_activated() -> None
```

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_delay` <a name="reset_delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDelay"></a>

```python
def reset_delay() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_concurrency` <a name="reset_max_concurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetMaxConcurrency"></a>

```python
def reset_max_concurrency() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trigger_dependency` <a name="reset_trigger_dependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTriggerDependency"></a>

```python
def reset_trigger_dependency() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference">DataFactoryTriggerTumblingWindowPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference">DataFactoryTriggerTumblingWindowRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference">DataFactoryTriggerTumblingWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependency">trigger_dependency</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList">DataFactoryTriggerTumblingWindowTriggerDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activatedInput">activated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delayInput">delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrencyInput">max_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipelineInput">pipeline_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retryInput">retry_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependencyInput">trigger_dependency_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delay">delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipeline"></a>

```python
pipeline: DataFactoryTriggerTumblingWindowPipelineOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference">DataFactoryTriggerTumblingWindowPipelineOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retry"></a>

```python
retry: DataFactoryTriggerTumblingWindowRetryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference">DataFactoryTriggerTumblingWindowRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeouts"></a>

```python
timeouts: DataFactoryTriggerTumblingWindowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference">DataFactoryTriggerTumblingWindowTimeoutsOutputReference</a>

---

##### `trigger_dependency`<sup>Required</sup> <a name="trigger_dependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependency"></a>

```python
trigger_dependency: DataFactoryTriggerTumblingWindowTriggerDependencyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList">DataFactoryTriggerTumblingWindowTriggerDependencyList</a>

---

##### `activated_input`<sup>Optional</sup> <a name="activated_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activatedInput"></a>

```python
activated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delayInput"></a>

```python
delay_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency_input`<sup>Optional</sup> <a name="max_concurrency_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrencyInput"></a>

```python
max_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pipeline_input`<sup>Optional</sup> <a name="pipeline_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipelineInput"></a>

```python
pipeline_input: DataFactoryTriggerTumblingWindowPipeline
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retryInput"></a>

```python
retry_input: DataFactoryTriggerTumblingWindowRetry
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataFactoryTriggerTumblingWindowTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>, cdktf.IResolvable]

---

##### `trigger_dependency_input`<sup>Optional</sup> <a name="trigger_dependency_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependencyInput"></a>

```python
trigger_dependency_input: typing.Union[IResolvable, typing.List[DataFactoryTriggerTumblingWindowTriggerDependency]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activated"></a>

```python
activated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delay"></a>

```python
delay: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerTumblingWindowConfig <a name="DataFactoryTriggerTumblingWindowConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  frequency: str,
  interval: typing.Union[int, float],
  name: str,
  pipeline: DataFactoryTriggerTumblingWindowPipeline,
  start_time: str,
  activated: typing.Union[bool, IResolvable] = None,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  delay: str = None,
  description: str = None,
  end_time: str = None,
  id: str = None,
  max_concurrency: typing.Union[int, float] = None,
  retry: DataFactoryTriggerTumblingWindowRetry = None,
  timeouts: DataFactoryTriggerTumblingWindowTimeouts = None,
  trigger_dependency: typing.Union[IResolvable, typing.List[DataFactoryTriggerTumblingWindowTriggerDependency]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.delay">delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.triggerDependency">trigger_dependency</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]</code> | trigger_dependency block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.pipeline"></a>

```python
pipeline: DataFactoryTriggerTumblingWindowPipeline
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

pipeline block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#pipeline DataFactoryTriggerTumblingWindow#pipeline}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.activated"></a>

```python
activated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}.

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.delay"></a>

```python
delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.retry"></a>

```python
retry: DataFactoryTriggerTumblingWindowRetry
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#retry DataFactoryTriggerTumblingWindow#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.timeouts"></a>

```python
timeouts: DataFactoryTriggerTumblingWindowTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#timeouts DataFactoryTriggerTumblingWindow#timeouts}

---

##### `trigger_dependency`<sup>Optional</sup> <a name="trigger_dependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.triggerDependency"></a>

```python
trigger_dependency: typing.Union[IResolvable, typing.List[DataFactoryTriggerTumblingWindowTriggerDependency]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]

trigger_dependency block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#trigger_dependency DataFactoryTriggerTumblingWindow#trigger_dependency}

---

### DataFactoryTriggerTumblingWindowPipeline <a name="DataFactoryTriggerTumblingWindowPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline(
  name: str,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#parameters DataFactoryTriggerTumblingWindow#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#parameters DataFactoryTriggerTumblingWindow#parameters}.

---

### DataFactoryTriggerTumblingWindowRetry <a name="DataFactoryTriggerTumblingWindowRetry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry(
  count: typing.Union[int, float],
  interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#count DataFactoryTriggerTumblingWindow#count}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#count DataFactoryTriggerTumblingWindow#count}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

### DataFactoryTriggerTumblingWindowTimeouts <a name="DataFactoryTriggerTumblingWindowTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#create DataFactoryTriggerTumblingWindow#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#delete DataFactoryTriggerTumblingWindow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#read DataFactoryTriggerTumblingWindow#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#update DataFactoryTriggerTumblingWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#create DataFactoryTriggerTumblingWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#delete DataFactoryTriggerTumblingWindow#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#read DataFactoryTriggerTumblingWindow#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#update DataFactoryTriggerTumblingWindow#update}.

---

### DataFactoryTriggerTumblingWindowTriggerDependency <a name="DataFactoryTriggerTumblingWindowTriggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency(
  offset: str = None,
  size: str = None,
  trigger_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.offset">offset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#offset DataFactoryTriggerTumblingWindow#offset}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#size DataFactoryTriggerTumblingWindow#size}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.triggerName">trigger_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#trigger_name DataFactoryTriggerTumblingWindow#trigger_name}. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.offset"></a>

```python
offset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#offset DataFactoryTriggerTumblingWindow#offset}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#size DataFactoryTriggerTumblingWindow#size}.

---

##### `trigger_name`<sup>Optional</sup> <a name="trigger_name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.triggerName"></a>

```python
trigger_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window#trigger_name DataFactoryTriggerTumblingWindow#trigger_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerTumblingWindowPipelineOutputReference <a name="DataFactoryTriggerTumblingWindowPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryTriggerTumblingWindowPipeline
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---


### DataFactoryTriggerTumblingWindowRetryOutputReference <a name="DataFactoryTriggerTumblingWindowRetryOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resetInterval">reset_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryTriggerTumblingWindowRetry
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---


### DataFactoryTriggerTumblingWindowTimeoutsOutputReference <a name="DataFactoryTriggerTumblingWindowTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryTriggerTumblingWindowTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>, cdktf.IResolvable]

---


### DataFactoryTriggerTumblingWindowTriggerDependencyList <a name="DataFactoryTriggerTumblingWindowTriggerDependencyList" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryTriggerTumblingWindowTriggerDependency]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>]]

---


### DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference <a name="DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_tumbling_window

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetTriggerName">reset_trigger_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_offset` <a name="reset_offset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_trigger_name` <a name="reset_trigger_name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetTriggerName"></a>

```python
def reset_trigger_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offsetInput">offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerNameInput">trigger_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offset">offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerName">trigger_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offsetInput"></a>

```python
offset_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `trigger_name_input`<sup>Optional</sup> <a name="trigger_name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerNameInput"></a>

```python
trigger_name_input: str
```

- *Type:* str

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offset"></a>

```python
offset: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `trigger_name`<sup>Required</sup> <a name="trigger_name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerName"></a>

```python
trigger_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryTriggerTumblingWindowTriggerDependency, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>, cdktf.IResolvable]

---



