# `dataFactoryTriggerCustomEvent` Submodule <a name="`dataFactoryTriggerCustomEvent` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerCustomEvent <a name="DataFactoryTriggerCustomEvent" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event azurerm_data_factory_trigger_custom_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent(
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
  eventgrid_topic_id: str,
  events: typing.List[str],
  name: str,
  pipeline: typing.Union[IResolvable, typing.List[DataFactoryTriggerCustomEventPipeline]],
  activated: typing.Union[bool, IResolvable] = None,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  subject_begins_with: str = None,
  subject_ends_with: str = None,
  timeouts: DataFactoryTriggerCustomEventTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.eventgridTopicId">eventgrid_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.pipeline">pipeline</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]</code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectBeginsWith">subject_begins_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectEndsWith">subject_ends_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}.

---

##### `eventgrid_topic_id`<sup>Required</sup> <a name="eventgrid_topic_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.eventgridTopicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.pipeline"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#pipeline DataFactoryTriggerCustomEvent#pipeline}

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.activated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subject_begins_with`<sup>Optional</sup> <a name="subject_begins_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectBeginsWith"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}.

---

##### `subject_ends_with`<sup>Optional</sup> <a name="subject_ends_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectEndsWith"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#timeouts DataFactoryTriggerCustomEvent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline">put_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetActivated">reset_activated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectBeginsWith">reset_subject_begins_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectEndsWith">reset_subject_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pipeline` <a name="put_pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline"></a>

```python
def put_pipeline(
  value: typing.Union[IResolvable, typing.List[DataFactoryTriggerCustomEventPipeline]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}.

---

##### `reset_activated` <a name="reset_activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetActivated"></a>

```python
def reset_activated() -> None
```

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subject_begins_with` <a name="reset_subject_begins_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectBeginsWith"></a>

```python
def reset_subject_begins_with() -> None
```

##### `reset_subject_ends_with` <a name="reset_subject_ends_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectEndsWith"></a>

```python
def reset_subject_ends_with() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryTriggerCustomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryTriggerCustomEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryTriggerCustomEvent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryTriggerCustomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerCustomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList">DataFactoryTriggerCustomEventPipelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference">DataFactoryTriggerCustomEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activatedInput">activated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicIdInput">eventgrid_topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipelineInput">pipeline_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWithInput">subject_begins_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWithInput">subject_ends_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicId">eventgrid_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWith">subject_begins_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWith">subject_ends_with</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipeline"></a>

```python
pipeline: DataFactoryTriggerCustomEventPipelineList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList">DataFactoryTriggerCustomEventPipelineList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeouts"></a>

```python
timeouts: DataFactoryTriggerCustomEventTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference">DataFactoryTriggerCustomEventTimeoutsOutputReference</a>

---

##### `activated_input`<sup>Optional</sup> <a name="activated_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activatedInput"></a>

```python
activated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `eventgrid_topic_id_input`<sup>Optional</sup> <a name="eventgrid_topic_id_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicIdInput"></a>

```python
eventgrid_topic_id_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pipeline_input`<sup>Optional</sup> <a name="pipeline_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipelineInput"></a>

```python
pipeline_input: typing.Union[IResolvable, typing.List[DataFactoryTriggerCustomEventPipeline]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]

---

##### `subject_begins_with_input`<sup>Optional</sup> <a name="subject_begins_with_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWithInput"></a>

```python
subject_begins_with_input: str
```

- *Type:* str

---

##### `subject_ends_with_input`<sup>Optional</sup> <a name="subject_ends_with_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWithInput"></a>

```python
subject_ends_with_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryTriggerCustomEventTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>]

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activated"></a>

```python
activated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `eventgrid_topic_id`<sup>Required</sup> <a name="eventgrid_topic_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicId"></a>

```python
eventgrid_topic_id: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subject_begins_with`<sup>Required</sup> <a name="subject_begins_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWith"></a>

```python
subject_begins_with: str
```

- *Type:* str

---

##### `subject_ends_with`<sup>Required</sup> <a name="subject_ends_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWith"></a>

```python
subject_ends_with: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerCustomEventConfig <a name="DataFactoryTriggerCustomEventConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  eventgrid_topic_id: str,
  events: typing.List[str],
  name: str,
  pipeline: typing.Union[IResolvable, typing.List[DataFactoryTriggerCustomEventPipeline]],
  activated: typing.Union[bool, IResolvable] = None,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  subject_begins_with: str = None,
  subject_ends_with: str = None,
  timeouts: DataFactoryTriggerCustomEventTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.eventgridTopicId">eventgrid_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.pipeline">pipeline</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]</code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.activated">activated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectBeginsWith">subject_begins_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectEndsWith">subject_ends_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}.

---

##### `eventgrid_topic_id`<sup>Required</sup> <a name="eventgrid_topic_id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.eventgridTopicId"></a>

```python
eventgrid_topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.pipeline"></a>

```python
pipeline: typing.Union[IResolvable, typing.List[DataFactoryTriggerCustomEventPipeline]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#pipeline DataFactoryTriggerCustomEvent#pipeline}

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.activated"></a>

```python
activated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subject_begins_with`<sup>Optional</sup> <a name="subject_begins_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectBeginsWith"></a>

```python
subject_begins_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}.

---

##### `subject_ends_with`<sup>Optional</sup> <a name="subject_ends_with" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectEndsWith"></a>

```python
subject_ends_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.timeouts"></a>

```python
timeouts: DataFactoryTriggerCustomEventTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#timeouts DataFactoryTriggerCustomEvent#timeouts}

---

### DataFactoryTriggerCustomEventPipeline <a name="DataFactoryTriggerCustomEventPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline(
  name: str,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#parameters DataFactoryTriggerCustomEvent#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#parameters DataFactoryTriggerCustomEvent#parameters}.

---

### DataFactoryTriggerCustomEventTimeouts <a name="DataFactoryTriggerCustomEventTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerCustomEventPipelineList <a name="DataFactoryTriggerCustomEventPipelineList" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryTriggerCustomEventPipelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryTriggerCustomEventPipeline]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]]

---


### DataFactoryTriggerCustomEventPipelineOutputReference <a name="DataFactoryTriggerCustomEventPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryTriggerCustomEventPipeline]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>]

---


### DataFactoryTriggerCustomEventTimeoutsOutputReference <a name="DataFactoryTriggerCustomEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_trigger_custom_event

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryTriggerCustomEventTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>]

---



